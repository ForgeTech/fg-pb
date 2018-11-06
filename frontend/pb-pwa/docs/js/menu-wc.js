'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`<nav>
    <ul class="list">
        <li class="title">
            <a href="index.html" data-type="index-link">pb-pwa documentation</a>
        </li>
        <li class="divider"></li>
        ${ isNormalMode ? `<div id="book-search-input" role="search">
    <input type="text" placeholder="Type to search">
</div>
` : '' }
        <li class="chapter">
            <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
            <ul class="links">
                    <li class="link">
                        <a href="overview.html" data-type="chapter-link">
                            <span class="icon ion-ios-keypad"></span>Overview
                        </a>
                    </li>
                    <li class="link">
                        <a href="index.html" data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>README
                        </a>
                    </li>
                    <li class="link">
                        <a href="dependencies.html"
                            data-type="chapter-link">
                            <span class="icon ion-ios-list"></span>Dependencies
                        </a>
                    </li>
            </ul>
        </li>
        <li class="chapter modules">
            <a data-type="chapter-link" href="modules.html">
                <div class="menu-toggler linked" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                    <span class="icon ion-ios-archive"></span>
                    <span class="link-name">Modules</span>
                    <span class="icon ion-ios-arrow-down"></span>
                </div>
            </a>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                    <li class="link">
                        <a href="modules/ApiModule.html" data-type="entity-link">ApiModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-ApiModule-833477405ffdbca48616a82bb4497b44"' : 'data-target="#xs-injectables-links-module-ApiModule-833477405ffdbca48616a82bb4497b44"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-ApiModule-833477405ffdbca48616a82bb4497b44"' : 'id="xs-injectables-links-module-ApiModule-833477405ffdbca48616a82bb4497b44"' }>
                                        <li class="link">
                                            <a href="injectables/AuthenticationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>AuthenticationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ContractService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>ContractService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LogsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>LogsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MarketService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>MarketService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MessagesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>MessagesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/OrdersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>OrdersService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SignalsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>SignalsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TradesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>TradesService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-AppModule-7b9fa3aa366c620542262ac2eb75909e"' : 'data-target="#xs-components-links-module-AppModule-7b9fa3aa366c620542262ac2eb75909e"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-AppModule-7b9fa3aa366c620542262ac2eb75909e"' : 'id="xs-components-links-module-AppModule-7b9fa3aa366c620542262ac2eb75909e"' }>
                                        <li class="link">
                                            <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/AsksViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AsksViewComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/BarStateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">BarStateComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/BidsViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">BidsViewComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/DashboardViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardViewComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/FgActionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FgActionsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/FgCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FgCardComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/FgInputComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FgInputComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/GraphComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">GraphComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/GraphPortfolioComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">GraphPortfolioComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/GraphProductHistoryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">GraphProductHistoryComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/GraphSignalHistoryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">GraphSignalHistoryComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/LoginViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginViewComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ModalAddOrderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModalAddOrderComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ModalApiKeyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModalApiKeyComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModalComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ModalHelpComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModalHelpComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ModalSettingsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModalSettingsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/OrderbookViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">OrderbookViewComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/OrdersViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">OrdersViewComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/PbIconValidationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PbIconValidationComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/PortfolioViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PortfolioViewComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ProductHistoryViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProductHistoryViewComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/PwaInstallComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PwaInstallComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SignalsViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SignalsViewComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TabApiKeyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TabApiKeyComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TabLoggingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TabLoggingComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TabProductionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TabProductionComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TabTestComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TabTestComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TableAddOrderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableAddOrderComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TableAsksComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableAsksComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TableBidsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableBidsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TableContractDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableContractDetailsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TableLogsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableLogsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TableOrderbookComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableOrderbookComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TableOrdersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableOrdersComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TableSignalsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableSignalsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TableTradesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableTradesComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TradesViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TradesViewComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-AppModule-7b9fa3aa366c620542262ac2eb75909e"' : 'data-target="#xs-injectables-links-module-AppModule-7b9fa3aa366c620542262ac2eb75909e"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-AppModule-7b9fa3aa366c620542262ac2eb75909e"' : 'id="xs-injectables-links-module-AppModule-7b9fa3aa366c620542262ac2eb75909e"' }>
                                        <li class="link">
                                            <a href="injectables/AsyncUrlApiKeyRespondsValidator.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>AsyncUrlApiKeyRespondsValidator</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AsyncUrlRespondsValidator.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>AsyncUrlRespondsValidator</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FgAppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>FgAppService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FgComponentBaseService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>FgComponentBaseService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FgEventService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>FgEventService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FgKeyboardService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>FgKeyboardService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PbDataService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>PbDataService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SyncUrlsEqualValidator.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>SyncUrlsEqualValidator</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#pipes-links-module-AppModule-7b9fa3aa366c620542262ac2eb75909e"' : 'data-target="#xs-pipes-links-module-AppModule-7b9fa3aa366c620542262ac2eb75909e"' }>
                                    <span class="icon ion-md-add"></span>
                                    <span>Pipes</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="pipes-links-module-AppModule-7b9fa3aa366c620542262ac2eb75909e"' : 'id="xs-pipes-links-module-AppModule-7b9fa3aa366c620542262ac2eb75909e"' }>
                                        <li class="link">
                                            <a href="pipes/FgEnumPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FgEnumPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/PbSidePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PbSidePipe</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/FgGlobalScopeModule.html" data-type="entity-link">FgGlobalScopeModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/FgGraphqlModule.html" data-type="entity-link">FgGraphqlModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-FgGraphqlModule-f8c372690e731388c607e31b941e0d01"' : 'data-target="#xs-injectables-links-module-FgGraphqlModule-f8c372690e731388c607e31b941e0d01"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-FgGraphqlModule-f8c372690e731388c607e31b941e0d01"' : 'id="xs-injectables-links-module-FgGraphqlModule-f8c372690e731388c607e31b941e0d01"' }>
                                        <li class="link">
                                            <a href="injectables/FgGraphqlService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>FgGraphqlService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/FgMaterialModule.html" data-type="entity-link">FgMaterialModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-FgMaterialModule-80fda442aed8cd7c15d67b596c23c77c"' : 'data-target="#xs-components-links-module-FgMaterialModule-80fda442aed8cd7c15d67b596c23c77c"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-FgMaterialModule-80fda442aed8cd7c15d67b596c23c77c"' : 'id="xs-components-links-module-FgMaterialModule-80fda442aed8cd7c15d67b596c23c77c"' }>
                                        <li class="link">
                                            <a href="components/FgAngularMaterialDemoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FgAngularMaterialDemoComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"' }>
                <span class="icon ion-ios-paper"></span>
                <span>Classes</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                    <li class="link">
                        <a href="classes/AppStateEntity.html" data-type="entity-link">AppStateEntity</a>
                    </li>
                    <li class="link">
                        <a href="classes/BrowserGlobalRef.html" data-type="entity-link">BrowserGlobalRef</a>
                    </li>
                    <li class="link">
                        <a href="classes/ConfigAuth.html" data-type="entity-link">ConfigAuth</a>
                    </li>
                    <li class="link">
                        <a href="classes/ConfigBreakPoint.html" data-type="entity-link">ConfigBreakPoint</a>
                    </li>
                    <li class="link">
                        <a href="classes/ConfigCommon.html" data-type="entity-link">ConfigCommon</a>
                    </li>
                    <li class="link">
                        <a href="classes/ConfigDebug.html" data-type="entity-link">ConfigDebug</a>
                    </li>
                    <li class="link">
                        <a href="classes/ConfigGenerateApiKey.html" data-type="entity-link">ConfigGenerateApiKey</a>
                    </li>
                    <li class="link">
                        <a href="classes/ConfigGraph.html" data-type="entity-link">ConfigGraph</a>
                    </li>
                    <li class="link">
                        <a href="classes/ConfigLoggingConnection.html" data-type="entity-link">ConfigLoggingConnection</a>
                    </li>
                    <li class="link">
                        <a href="classes/ConfigMarketConnection.html" data-type="entity-link">ConfigMarketConnection</a>
                    </li>
                    <li class="link">
                        <a href="classes/ConfigMetaData.html" data-type="entity-link">ConfigMetaData</a>
                    </li>
                    <li class="link">
                        <a href="classes/ConfigPowerbot.html" data-type="entity-link">ConfigPowerbot</a>
                    </li>
                    <li class="link">
                        <a href="classes/ConfigProductionConnection.html" data-type="entity-link">ConfigProductionConnection</a>
                    </li>
                    <li class="link">
                        <a href="classes/ConfigTable.html" data-type="entity-link">ConfigTable</a>
                    </li>
                    <li class="link">
                        <a href="classes/ConfigTestConnection.html" data-type="entity-link">ConfigTestConnection</a>
                    </li>
                    <li class="link">
                        <a href="classes/ConfigView.html" data-type="entity-link">ConfigView</a>
                    </li>
                    <li class="link">
                        <a href="classes/Configuration.html" data-type="entity-link">Configuration</a>
                    </li>
                    <li class="link">
                        <a href="classes/ContractEntity.html" data-type="entity-link">ContractEntity</a>
                    </li>
                    <li class="link">
                        <a href="classes/CustomHttpUrlEncodingCodec.html" data-type="entity-link">CustomHttpUrlEncodingCodec</a>
                    </li>
                    <li class="link">
                        <a href="classes/ErrorTranslation.html" data-type="entity-link">ErrorTranslation</a>
                    </li>
                    <li class="link">
                        <a href="classes/FgAction.html" data-type="entity-link">FgAction</a>
                    </li>
                    <li class="link">
                        <a href="classes/FgComponentBaseComponent.html" data-type="entity-link">FgComponentBaseComponent</a>
                    </li>
                    <li class="link">
                        <a href="classes/FgComponentBaseEvent.html" data-type="entity-link">FgComponentBaseEvent</a>
                    </li>
                    <li class="link">
                        <a href="classes/FgEntityEvent.html" data-type="entity-link">FgEntityEvent</a>
                    </li>
                    <li class="link">
                        <a href="classes/FgEvent.html" data-type="entity-link">FgEvent</a>
                    </li>
                    <li class="link">
                        <a href="classes/FgEventSubscriber.html" data-type="entity-link">FgEventSubscriber</a>
                    </li>
                    <li class="link">
                        <a href="classes/GlobalRef.html" data-type="entity-link">GlobalRef</a>
                    </li>
                    <li class="link">
                        <a href="classes/LogEntity.html" data-type="entity-link">LogEntity</a>
                    </li>
                    <li class="link">
                        <a href="classes/MarketEntity.html" data-type="entity-link">MarketEntity</a>
                    </li>
                    <li class="link">
                        <a href="classes/MessageEntity.html" data-type="entity-link">MessageEntity</a>
                    </li>
                    <li class="link">
                        <a href="classes/NodeGlobalRef.html" data-type="entity-link">NodeGlobalRef</a>
                    </li>
                    <li class="link">
                        <a href="classes/OrderEntity.html" data-type="entity-link">OrderEntity</a>
                    </li>
                    <li class="link">
                        <a href="classes/PbAppEntityConst.html" data-type="entity-link">PbAppEntityConst</a>
                    </li>
                    <li class="link">
                        <a href="classes/PbAppEvent.html" data-type="entity-link">PbAppEvent</a>
                    </li>
                    <li class="link">
                        <a href="classes/PbAppStorageConst.html" data-type="entity-link">PbAppStorageConst</a>
                    </li>
                    <li class="link">
                        <a href="classes/PbMissingTranslationHandler.html" data-type="entity-link">PbMissingTranslationHandler</a>
                    </li>
                    <li class="link">
                        <a href="classes/PowerBotEntity.html" data-type="entity-link">PowerBotEntity</a>
                    </li>
                    <li class="link">
                        <a href="classes/SignalEntity.html" data-type="entity-link">SignalEntity</a>
                    </li>
                    <li class="link">
                        <a href="classes/TradeEntity.html" data-type="entity-link">TradeEntity</a>
                    </li>
            </ul>
        </li>
                <li class="chapter">
                    <div class="simple menu-toggler" data-toggle="collapse"
                        ${ isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"' }>
                        <span class="icon ion-md-arrow-round-down"></span>
                        <span>Injectables</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse"
                    ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                            <li class="link">
                                <a href="injectables/AsyncUrlApiKeyRespondsValidator.html" data-type="entity-link">AsyncUrlApiKeyRespondsValidator</a>
                            </li>
                            <li class="link">
                                <a href="injectables/AsyncUrlRespondsValidator.html" data-type="entity-link">AsyncUrlRespondsValidator</a>
                            </li>
                            <li class="link">
                                <a href="injectables/AuthenticationService.html" data-type="entity-link">AuthenticationService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/ContractService.html" data-type="entity-link">ContractService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/FgAppService.html" data-type="entity-link">FgAppService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/FgComponentBaseService.html" data-type="entity-link">FgComponentBaseService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/FgEventService.html" data-type="entity-link">FgEventService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/FgGraphqlService.html" data-type="entity-link">FgGraphqlService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/FgKeyboardService.html" data-type="entity-link">FgKeyboardService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/LogsService.html" data-type="entity-link">LogsService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/MarketService.html" data-type="entity-link">MarketService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/MessagesService.html" data-type="entity-link">MessagesService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/OrdersService.html" data-type="entity-link">OrdersService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/PbDataService.html" data-type="entity-link">PbDataService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/PbStateService.html" data-type="entity-link">PbStateService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/SignalsService.html" data-type="entity-link">SignalsService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/SyncUrlsEqualValidator.html" data-type="entity-link">SyncUrlsEqualValidator</a>
                            </li>
                            <li class="link">
                                <a href="injectables/TradesService.html" data-type="entity-link">TradesService</a>
                            </li>
                    </ul>
                </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
                 ${ isNormalMode ? 'data-target="#guards-links"' : 'data-target="#xs-guards-links"' }>
            <span class="icon ion-ios-lock"></span>
            <span>Guards</span>
            <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
                ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                <li class="link">
                    <a href="guards/ConnectedGuard.html" data-type="entity-link">ConnectedGuard</a>
                </li>
            </ul>
            </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
                ${ isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"' }>
                <span class="icon ion-md-information-circle-outline"></span>
                <span>Interfaces</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                    <li class="link">
                        <a href="interfaces/ApiKey.html" data-type="entity-link">ApiKey</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ApiKeyDescription.html" data-type="entity-link">ApiKeyDescription</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/BulkSignal.html" data-type="entity-link">BulkSignal</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/CommonConfigTableColumnInterface.html" data-type="entity-link">CommonConfigTableColumnInterface</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ConfigTableColumnInterface.html" data-type="entity-link">ConfigTableColumnInterface</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ConfigTableInterface.html" data-type="entity-link">ConfigTableInterface</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ConfigurationParameters.html" data-type="entity-link">ConfigurationParameters</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ContractHistoryItem.html" data-type="entity-link">ContractHistoryItem</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ContractItem.html" data-type="entity-link">ContractItem</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Credentials.html" data-type="entity-link">Credentials</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Credentials1.html" data-type="entity-link">Credentials1</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ErrorResponse.html" data-type="entity-link">ErrorResponse</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/GraphDataInterface.html" data-type="entity-link">GraphDataInterface</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/InlineResponse200.html" data-type="entity-link">InlineResponse200</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/InlineResponse20010.html" data-type="entity-link">InlineResponse20010</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/InlineResponse20010Bid.html" data-type="entity-link">InlineResponse20010Bid</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/InlineResponse20010Products.html" data-type="entity-link">InlineResponse20010Products</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/InlineResponse20011.html" data-type="entity-link">InlineResponse20011</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/InlineResponse20012.html" data-type="entity-link">InlineResponse20012</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/InlineResponse20012Options.html" data-type="entity-link">InlineResponse20012Options</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/InlineResponse20012Products.html" data-type="entity-link">InlineResponse20012Products</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/InlineResponse20013.html" data-type="entity-link">InlineResponse20013</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/InlineResponse2002.html" data-type="entity-link">InlineResponse2002</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/InlineResponse2004.html" data-type="entity-link">InlineResponse2004</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/InlineResponse2005.html" data-type="entity-link">InlineResponse2005</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/InlineResponse2008.html" data-type="entity-link">InlineResponse2008</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/InlineResponse2008Bid.html" data-type="entity-link">InlineResponse2008Bid</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/InlineResponse2009.html" data-type="entity-link">InlineResponse2009</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/InlineResponseDefault.html" data-type="entity-link">InlineResponseDefault</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/InternalTrade.html" data-type="entity-link">InternalTrade</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/NewInternalTrade.html" data-type="entity-link">NewInternalTrade</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/NewInternalTrade1.html" data-type="entity-link">NewInternalTrade1</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/OrderBook.html" data-type="entity-link">OrderBook</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/OrderBookEntry.html" data-type="entity-link">OrderBookEntry</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/OrderBooks.html" data-type="entity-link">OrderBooks</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/PbModalTabComponentInterface.html" data-type="entity-link">PbModalTabComponentInterface</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ProductInformation.html" data-type="entity-link">ProductInformation</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/PublicTrade.html" data-type="entity-link">PublicTrade</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/RenderTableColumnInterface.html" data-type="entity-link">RenderTableColumnInterface</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Signal.html" data-type="entity-link">Signal</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Value.html" data-type="entity-link">Value</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Value2.html" data-type="entity-link">Value2</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/fgGlobal.html" data-type="entity-link">fgGlobal</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"' }>
                <span class="icon ion-ios-cube"></span>
                <span>Miscellaneous</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                    <li class="link">
                      <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                    </li>
                    <li class="link">
                      <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                    </li>
                    <li class="link">
                      <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                    </li>
                    <li class="link">
                      <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
        </li>
        <li class="divider"></li>
        <li class="copyright">
                Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.svg" class="img-responsive" data-type="compodoc-logo">
                </a>
        </li>
    </ul>
</nav>`);
        this.innerHTML = tp.strings;
    }
});
