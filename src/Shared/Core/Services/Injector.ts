/* eslint-disable no-useless-escape */

class Injector {
    factories = {};
    singletons = {};
    register(key, factory) {
        this.factories[key] = factory;
    }

    registerSingle(key, instance) {
        this.singletons[key] = instance;
    }

    get(CTor, params) {
        var dependencies = this.resolveDependencies(CTor, params);
        // a workaround to allow calling a constructor through .apply
        // see https://stackoverflow.com/questions/1606797/use-of-apply-with-new-operator-is-this-possible
        function MiddlemanCTor() {
            CTor.apply(this, dependencies);
        }
        // const MiddlemanCTor = () => {
        //     CTor.apply(this, dependencies);
        // };
        MiddlemanCTor.prototype = CTor.prototype;
        return new MiddlemanCTor();
    }

    resolveDependencies(CTor, params) {
        params = params || {};
        const args = this.getArguments(CTor);
        const dependencies: any = [];
        for (var i = 0; i < args.length; i++) {
            const paramName = args[i];
            const factory = this.factories[paramName];

            // resolve dependency using:
            // 1. parameters supplied by caller
            // 2. registered factories
            // 3. registered singletons
            const dependency: any =
                params[paramName] ||
                (typeof factory === "function" ? factory() : undefined) ||
                this.singletons[paramName];

            dependencies.push(dependency);
        }
        return dependencies;
    }

    getArguments(func) {
        // Regex from require.js
        const FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
        const args = func
            .toString()
            .match(FN_ARGS)[1]
            .split(",")
            .map(function(str) {
                return str.trim();
            });
        return args;
    }
}
export default new Injector();
