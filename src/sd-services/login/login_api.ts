// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
//append_imports_end
export class login_api {
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
    this.serviceName = 'login_api';
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
      instance = new login_api(
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
    //appendnew_flow_login_api_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: login_api');
    //appendnew_flow_login_api_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: login_api');

    this.app['post'](
      `${this.serviceBasePath}/login`,
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
          bh = await this.sd_QUriXObcFWungx9g(bh, parentSpanInst);
          //appendnew_next_sd_qA2FxVA138HnRzpt
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_qA2FxVA138HnRzpt');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_login_api_HttpIn
  }
  //   service flows_login_api

  //appendnew_flow_login_api_start

  async sd_QUriXObcFWungx9g(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QUriXObcFWungx9g',
      parentSpanInst
    );
    try {
      var jwt = require('jsonwebtoken');
      if (
        process.env.LOGIN_ID == bh.input.body.email &&
        process.env.LOGIN_PASS == bh.input.body.password
      ) {
        var token = jwt.sign({ admin: process.env.LOGIN_ID }, 'shhhhh', {
          expiresIn: '24h',
        });

        bh.local.response = {
          statusCode: 200,
          message: 'User LoggedIN',
          token: token,
        };
      } else {
        throw new Error('Invalid Email or Password');
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_9fIqo4KtCUX1VPZk(bh, parentSpanInst);
      //appendnew_next_sd_QUriXObcFWungx9g
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QUriXObcFWungx9g',
        spanInst,
        'sd_QUriXObcFWungx9g'
      );
    }
  }

  async sd_9fIqo4KtCUX1VPZk(bh, parentSpanInst) {
    try {
      bh.web.res.cookie('jwt_token ', bh.local.response.token, {
        maxAge: 1000000,
      });

      bh.web.res.status(bh.local.response.statusCode).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9fIqo4KtCUX1VPZk');
    }
  }

  async sd_n2OOYEGTXDrtR4XJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_n2OOYEGTXDrtR4XJ',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 400,
        message: bh.error?.message,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_9fIqo4KtCUX1VPZk(bh, parentSpanInst);
      //appendnew_next_sd_n2OOYEGTXDrtR4XJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_n2OOYEGTXDrtR4XJ',
        spanInst,
        'sd_n2OOYEGTXDrtR4XJ'
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
    if (
      false ||
      (await this.sd_yKq0Cg5oSAciEN6t(bh, parentSpanInst))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  async sd_yKq0Cg5oSAciEN6t(bh, parentSpanInst) {
    const catchConnectedNodes = ['sd_n2OOYEGTXDrtR4XJ', 'sd_9fIqo4KtCUX1VPZk'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.sd_n2OOYEGTXDrtR4XJ(bh, parentSpanInst);
    //appendnew_next_sd_yKq0Cg5oSAciEN6t
    return true;
  }
  //appendnew_flow_login_api_Catch
}
