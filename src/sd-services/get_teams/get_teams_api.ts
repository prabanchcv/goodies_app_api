// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_DTBjhHeQ0o9aZDx7 from './get_teams_service'; //_splitter_
//append_imports_end
export class get_teams_api {
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
    this.serviceName = 'get_teams_api';
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
      instance = new get_teams_api(
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
    //appendnew_flow_get_teams_api_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: get_teams_api');
    //appendnew_flow_get_teams_api_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: get_teams_api');

    this.app['get'](
      `${this.serviceBasePath}/teams`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_VyZvjJ3M0Tfnm1As(bh, parentSpanInst);
          //appendnew_next_sd_uUMu55vWOGcn3V3a
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_uUMu55vWOGcn3V3a');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_get_teams_api_HttpIn
  }
  //   service flows_get_teams_api

  //appendnew_flow_get_teams_api_start

  async sd_VyZvjJ3M0Tfnm1As(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_VyZvjJ3M0Tfnm1As',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_4kAxrsxPktNgA26j(bh, parentSpanInst);
      //appendnew_next_sd_VyZvjJ3M0Tfnm1As
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VyZvjJ3M0Tfnm1As',
        spanInst,
        'sd_VyZvjJ3M0Tfnm1As'
      );
    }
  }

  async sd_4kAxrsxPktNgA26j(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4kAxrsxPktNgA26j',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_DTBjhHeQ0o9aZDx7Instance: SSD_SERVICE_ID_sd_DTBjhHeQ0o9aZDx7.get_teams_service =
        SSD_SERVICE_ID_sd_DTBjhHeQ0o9aZDx7.get_teams_service.getInstance();
      bh = await SSD_SERVICE_ID_sd_DTBjhHeQ0o9aZDx7Instance.sd_NYiV4asrp70EMqHf(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_vfsYcz2vDgw0z6H9(bh, parentSpanInst);
      //appendnew_next_sd_4kAxrsxPktNgA26j
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4kAxrsxPktNgA26j',
        spanInst,
        'sd_4kAxrsxPktNgA26j'
      );
    }
  }

  async sd_vfsYcz2vDgw0z6H9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_vfsYcz2vDgw0z6H9',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 200,
        response: bh.local.result,
      };

      this.tracerService.sendData(spanInst, bh);
      await this.sd_RPlnrNFrDmUDZCj8(bh, parentSpanInst);
      //appendnew_next_sd_vfsYcz2vDgw0z6H9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vfsYcz2vDgw0z6H9',
        spanInst,
        'sd_vfsYcz2vDgw0z6H9'
      );
    }
  }

  async sd_RPlnrNFrDmUDZCj8(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.response.statusCode).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RPlnrNFrDmUDZCj8');
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
  //appendnew_flow_get_teams_api_Catch
}
