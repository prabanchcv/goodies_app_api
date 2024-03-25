// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { DmUtils } from '../../utils/ndefault-datamodel/find/dmUtils'; //_splitter_
//append_imports_end
export class get_teams_service {
  private sdService = new SDBaseService();
  private tracerService = new TracerService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'get_teams_service';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new get_teams_service(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    //append_listeners
  }

  async mountTimers() {
    //appendnew_flow_get_teams_service_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: get_teams_service');
    //appendnew_flow_get_teams_service_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: get_teams_service');
    //appendnew_flow_get_teams_service_HttpIn
  }
  //   service flows_get_teams_service

  async sd_NYiV4asrp70EMqHf(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'sd_NYiV4asrp70EMqHf',
      parentSpanInst
    );

    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Pqu1eLX3bGQmuuZr(bh, parentSpanInst);
      //appendnew_next_sd_NYiV4asrp70EMqHf
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NYiV4asrp70EMqHf',
        spanInst,
        'sd_NYiV4asrp70EMqHf'
      );
    }
  }
  //appendnew_flow_get_teams_service_start

  async sd_Pqu1eLX3bGQmuuZr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Pqu1eLX3bGQmuuZr',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_EQ0uxl70E3kjCZ8g');
      bh.local.result = await dmUtilsInst.find(
        '_EN_373fkobibm',
        {},
        undefined,
        undefined,
        undefined
      );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_Pqu1eLX3bGQmuuZr
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Pqu1eLX3bGQmuuZr',
        spanInst,
        'sd_Pqu1eLX3bGQmuuZr'
      );
    }
  }

  //appendnew_node

  // error_handler_slot
  private async errorHandler(
    bh,
    e,
    src,
    parentSpanInst?,
    functionName?
  ): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    bh.errorFunName = functionName;
    this.tracerService.sendData(parentSpanInst, bh, true);
    if (bh.web.next) {
      bh.web.next(e);
    } else {
      throw e;
    }
  }
  //appendnew_flow_get_teams_service_Catch
}
