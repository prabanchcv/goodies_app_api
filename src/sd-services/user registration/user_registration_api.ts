// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { validateRequest } from '../../middleware/SchemaValidator'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { validateNode } from '../../utils/ndefault-datamodel/find/validateUtil'; //_splitter_
import * as SSD_SERVICE_ID_sd_x67Ixlrl8PZJfOB3 from './barcode_generate'; //_splitter_
import * as SSD_SERVICE_ID_sd_JoNOAtsI08gNdk19 from './user_registration_service'; //_splitter_
//append_imports_end
export class user_registration_api {
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
    this.serviceName = 'user_registration_api';
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
      instance = new user_registration_api(
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
    //appendnew_flow_user_registration_api_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: user_registration_api');
    //appendnew_flow_user_registration_api_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: user_registration_api');

    this.app['post'](
      `${this.serviceBasePath}/user`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      validateRequest(),
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
          this.sdService.addDMPropertiesToBh(bh, req, 'users');
          bh = await this.validate(bh, parentSpanInst);
          //appendnew_next_sd_TnKkt2J3roWAxHrk
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_TnKkt2J3roWAxHrk');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_user_registration_api_HttpIn
  }
  //   service flows_user_registration_api

  //appendnew_flow_user_registration_api_start

  async validate(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('validate', parentSpanInst);
    try {
      validateNode('_EN_9kyglbeo6f', bh.input.body.users, true);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_vH2ne7G2DhZmUY2a(bh, parentSpanInst);
      //appendnew_next_validate
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BNea4gaCcNVLpIMr',
        spanInst,
        'validate'
      );
    }
  }

  async sd_vH2ne7G2DhZmUY2a(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_vH2ne7G2DhZmUY2a',
      parentSpanInst
    );
    try {
      console.log('hhhhhhhh');
      console.log(bh.input.body);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.insertUsers(bh, parentSpanInst);
      //appendnew_next_sd_vH2ne7G2DhZmUY2a
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vH2ne7G2DhZmUY2a',
        spanInst,
        'sd_vH2ne7G2DhZmUY2a'
      );
    }
  }

  async insertUsers(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'insertUsers',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_JoNOAtsI08gNdk19Instance: SSD_SERVICE_ID_sd_JoNOAtsI08gNdk19.user_registration_service =
        SSD_SERVICE_ID_sd_JoNOAtsI08gNdk19.user_registration_service.getInstance();
      bh = await SSD_SERVICE_ID_sd_JoNOAtsI08gNdk19Instance.userRegister(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_NeEuB1EtqxjRAOup(bh, parentSpanInst);
      //appendnew_next_insertUsers
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PLiAitw3PwCCEK31',
        spanInst,
        'insertUsers'
      );
    }
  }

  async sd_NeEuB1EtqxjRAOup(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NeEuB1EtqxjRAOup',
      parentSpanInst
    );
    try {
      console.log('user insert succesfull');
      if (bh.local.response.statusCode == 400) {
        throw new Error('User already Exists');
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.qrGenerate(bh, parentSpanInst);
      //appendnew_next_sd_NeEuB1EtqxjRAOup
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NeEuB1EtqxjRAOup',
        spanInst,
        'sd_NeEuB1EtqxjRAOup'
      );
    }
  }

  async qrGenerate(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'qrGenerate',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_x67Ixlrl8PZJfOB3Instance: SSD_SERVICE_ID_sd_x67Ixlrl8PZJfOB3.barcode_generate =
        SSD_SERVICE_ID_sd_x67Ixlrl8PZJfOB3.barcode_generate.getInstance();
      bh = await SSD_SERVICE_ID_sd_x67Ixlrl8PZJfOB3Instance.barcodeGenerate(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_r5AG7ZwynXTpitPg(bh, parentSpanInst);
      //appendnew_next_qrGenerate
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_G2hYUNYYJ7Gd4sXw',
        spanInst,
        'qrGenerate'
      );
    }
  }

  async sd_r5AG7ZwynXTpitPg(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_r5AG7ZwynXTpitPg',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 201,
        response: 'User Created successfully',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.userRegistrationOut(bh, parentSpanInst);
      //appendnew_next_sd_r5AG7ZwynXTpitPg
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_r5AG7ZwynXTpitPg',
        spanInst,
        'sd_r5AG7ZwynXTpitPg'
      );
    }
  }

  async userRegistrationOut(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.response.statusCode).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_IUjk8ivIVOAGSZPY');
    }
  }

  async sd_JhlUBSYOCdt6YhyC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JhlUBSYOCdt6YhyC',
      parentSpanInst
    );
    try {
      console.log('ggggggggggggggg');

      console.log(bh);

      bh.local.response = {
        statusCode: 400,
        message: bh.error?.message,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.userRegistrationOut(bh, parentSpanInst);
      //appendnew_next_sd_JhlUBSYOCdt6YhyC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JhlUBSYOCdt6YhyC',
        spanInst,
        'sd_JhlUBSYOCdt6YhyC'
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
      (await this.sd_yLsGoyQnL4XF70c2(bh, parentSpanInst))
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
  async sd_yLsGoyQnL4XF70c2(bh, parentSpanInst) {
    const catchConnectedNodes = ['sd_JhlUBSYOCdt6YhyC', 'sd_IUjk8ivIVOAGSZPY'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.sd_JhlUBSYOCdt6YhyC(bh, parentSpanInst);
    //appendnew_next_sd_yLsGoyQnL4XF70c2
    return true;
  }
  //appendnew_flow_user_registration_api_Catch
}
