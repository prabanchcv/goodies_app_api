// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { DmUtils } from '../../utils/ndefault-datamodel/find/dmUtils'; //_splitter_
//append_imports_end
export class filter_user_by_teamId {
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
    this.serviceName = 'filter_user_by_teamId';
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
      instance = new filter_user_by_teamId(
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
    //appendnew_flow_filter_user_by_teamId_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: filter_user_by_teamId');
    //appendnew_flow_filter_user_by_teamId_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: filter_user_by_teamId');

    this.app['get'](
      `${this.serviceBasePath}/team-users`,
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
          bh = await this.sd_aJh3XQrnvrMRVP3a(bh, parentSpanInst);
          //appendnew_next_sd_JEcIiDQndCYNDkpu
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_JEcIiDQndCYNDkpu');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_filter_user_by_teamId_HttpIn
  }
  //   service flows_filter_user_by_teamId

  //appendnew_flow_filter_user_by_teamId_start

  async sd_aJh3XQrnvrMRVP3a(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_aJh3XQrnvrMRVP3a',
      parentSpanInst
    );
    try {
      console.log(bh.input.query, 'gotteamid');
      bh.local.team = {
        team_id: parseInt(bh.input.query.team_id),
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_i8BSf8TCfKA4B0tY(bh, parentSpanInst);
      //appendnew_next_sd_aJh3XQrnvrMRVP3a
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_aJh3XQrnvrMRVP3a',
        spanInst,
        'sd_aJh3XQrnvrMRVP3a'
      );
    }
  }

  async sd_i8BSf8TCfKA4B0tY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_i8BSf8TCfKA4B0tY',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_EQ0uxl70E3kjCZ8g');
      bh.local.result = await dmUtilsInst.find(
        '_EN_ihm2p9b723',
        bh.local.team,
        undefined,
        undefined,
        undefined
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_xhfvthTDNx3hk1b3(bh, parentSpanInst);
      //appendnew_next_sd_i8BSf8TCfKA4B0tY
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_i8BSf8TCfKA4B0tY',
        spanInst,
        'sd_i8BSf8TCfKA4B0tY'
      );
    }
  }

  async sd_xhfvthTDNx3hk1b3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xhfvthTDNx3hk1b3',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 200,
        response: bh.local.result,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_oNzXehE5dkrus7w3(bh, parentSpanInst);
      //appendnew_next_sd_xhfvthTDNx3hk1b3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xhfvthTDNx3hk1b3',
        spanInst,
        'sd_xhfvthTDNx3hk1b3'
      );
    }
  }

  async sd_oNzXehE5dkrus7w3(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.response.statusCode).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_oNzXehE5dkrus7w3');
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
  //appendnew_flow_filter_user_by_teamId_Catch
}
