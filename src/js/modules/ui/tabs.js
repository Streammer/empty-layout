export class Tabs {
    rootNode = null;
    currentTab = null;
    currentTabContent = null;
    currentContentTab = null;
    collectionTabs = null;

    constructor({rootSelector = '.ui-tabs', rootNode = null}) {
        if (!rootNode) {
            this.rootNode = document.querySelector(rootSelector);
        } else {
            this.rootNode = rootNode;
        }
        this.currentTab = this.rootNode?.querySelector('.ui-tabs__navigation-trigger.active');
        this.currentTabContent = this.rootNode?.querySelector('.ui-tabs__content');
        this.currentContentTab = this.currentTabContent?.querySelector('.ui-tabs__content-item.active');

        if (this.rootNode) {
            this.init();
        }
    }

    init() {
        if (!this.currentTab) {
            this.currentTab = this.rootNode.querySelector('.ui-tabs__navigation-trigger');
            this.currentTab.classList.add('active');
        }

        if (!this.currentContentTab) {
            this.currentContentTab = this.rootNode.querySelector('.ui-tabs__content-item');
            this.currentContentTab.classList.add('active');
        }

        this.rootNode.addEventListener('click', (event) => {
            this.initEventTab(event);
        });
    }

    initEventTab(event) {
        event.preventDefault();
        const triggerTab = event.target.closest('.ui-tabs__navigation-trigger');

        if (!triggerTab) return;

        const contentTab = this.rootNode.querySelector(`[data-tab="${event.target.getAttribute('href')}"]`);

        if (this.currentTab != triggerTab && contentTab) {
            this.currentTab.classList.remove('active');
            triggerTab.classList.add('active');

            this.currentContentTab.classList.remove('active');
            contentTab.classList.add('active');

            this.currentTab = triggerTab;
            this.currentContentTab = contentTab;
        }
    }
}