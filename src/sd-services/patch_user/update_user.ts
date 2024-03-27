// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import * as os from 'os'; //_splitter_
import { sep } from 'path'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_5LzspN9E8sISp90h from './update_user_service'; //_splitter_
//append_imports_end
export class update_user {
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
    this.serviceName = 'update_user';
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
      instance = new update_user(
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
    //appendnew_flow_update_user_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: update_user');
    //appendnew_flow_update_user_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: update_user');

    this.app['put'](
      `${this.serviceBasePath}/user/put`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'jwt',
        'pre',
        this.generatedMiddlewares
      ),
      this.sdService.multipartParser({
        type: 'path',
        path: (os.tmpdir() + '').replace(/\\|\//g, sep),
        options: [{ name: 'file', maxCount: 1 }],
      }),

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
          bh = await this.sd_FOisgL65XXz2k5mh(bh, parentSpanInst);
          //appendnew_next_sd_EWmRinK5nSGAK9m3
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_EWmRinK5nSGAK9m3');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'jwt',
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_update_user_HttpIn
  }
  //   service flows_update_user

  //appendnew_flow_update_user_start

  async sd_FOisgL65XXz2k5mh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FOisgL65XXz2k5mh',
      parentSpanInst
    );
    try {
      console.log('heiiiiiiiiiiiiiiiiiiiiiiiiiii');
      console.log(bh.input?.body?.id);
      console.log(bh.input.body);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_MYP7R7300kS37cTq(bh, parentSpanInst);
      //appendnew_next_sd_FOisgL65XXz2k5mh
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FOisgL65XXz2k5mh',
        spanInst,
        'sd_FOisgL65XXz2k5mh'
      );
    }
  }

  async sd_MYP7R7300kS37cTq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MYP7R7300kS37cTq',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_5LzspN9E8sISp90hInstance: SSD_SERVICE_ID_sd_5LzspN9E8sISp90h.update_user_service =
        SSD_SERVICE_ID_sd_5LzspN9E8sISp90h.update_user_service.getInstance();
      bh = await SSD_SERVICE_ID_sd_5LzspN9E8sISp90hInstance.updateUser(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_pu28SciBn4Oj1gQy(bh, parentSpanInst);
      //appendnew_next_sd_MYP7R7300kS37cTq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MYP7R7300kS37cTq',
        spanInst,
        'sd_MYP7R7300kS37cTq'
      );
    }
  }

  async sd_pu28SciBn4Oj1gQy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_pu28SciBn4Oj1gQy',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 203,
        response: 'updated successfully',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_rNbgPp8n5qwxSbKt(bh, parentSpanInst);
      //appendnew_next_sd_pu28SciBn4Oj1gQy
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pu28SciBn4Oj1gQy',
        spanInst,
        'sd_pu28SciBn4Oj1gQy'
      );
    }
  }

  async sd_rNbgPp8n5qwxSbKt(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.response.statusCode).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_rNbgPp8n5qwxSbKt');
    }
  }

  async sd_ubBTxtT5k8v0Yksh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ubBTxtT5k8v0Yksh',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 400,
        message: bh.errors?.message,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_rNbgPp8n5qwxSbKt(bh, parentSpanInst);
      //appendnew_next_sd_ubBTxtT5k8v0Yksh
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ubBTxtT5k8v0Yksh',
        spanInst,
        'sd_ubBTxtT5k8v0Yksh'
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
      (await this.sd_JSnVpisDfmg4CjJP(bh, parentSpanInst))
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
  async sd_JSnVpisDfmg4CjJP(bh, parentSpanInst) {
    const catchConnectedNodes = ['sd_ubBTxtT5k8v0Yksh', 'sd_rNbgPp8n5qwxSbKt'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.sd_ubBTxtT5k8v0Yksh(bh, parentSpanInst);
    //appendnew_next_sd_JSnVpisDfmg4CjJP
    return true;
  }
  //appendnew_flow_update_user_Catch
}
