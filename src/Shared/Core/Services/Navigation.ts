let instance: NavigationService;
export class NavigationService {
    navigator;
    static getInstance() {
        if (!instance) {
            instance = new NavigationService();
        }
        return instance;
    }
    setNavigator(nav) {
        this.navigator = nav;
    }
}
export default NavigationService.getInstance();
