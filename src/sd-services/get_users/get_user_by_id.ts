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
export class get_user_by_id {
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
    this.serviceName = 'get_user_by_id';
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
      instance = new get_user_by_id(
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
    //appendnew_flow_get_user_by_id_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: get_user_by_id');
    //appendnew_flow_get_user_by_id_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: get_user_by_id');

    this.app['get'](
      `${this.serviceBasePath}/user/get`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'jwt',
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
          bh = await this.sd_zX7nwC3XHpRn10Aq(bh, parentSpanInst);
          //appendnew_next_sd_DaSJ8OlhUIZQ7FLe
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_DaSJ8OlhUIZQ7FLe');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'jwt',
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_get_user_by_id_HttpIn
  }
  //   service flows_get_user_by_id

  //appendnew_flow_get_user_by_id_start

  async sd_zX7nwC3XHpRn10Aq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zX7nwC3XHpRn10Aq',
      parentSpanInst
    );
    try {
      console.log(bh.input.query);
      if (!bh.input.query?.id) {
        throw new Error('Invalid ID');
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_kTir02TxqfzL0zPa(bh, parentSpanInst);
      //appendnew_next_sd_zX7nwC3XHpRn10Aq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zX7nwC3XHpRn10Aq',
        spanInst,
        'sd_zX7nwC3XHpRn10Aq'
      );
    }
  }

  async sd_kTir02TxqfzL0zPa(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_kTir02TxqfzL0zPa',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_EQ0uxl70E3kjCZ8g');
      bh.local.response = await dmUtilsInst.find(
        '_EN_ihm2p9b723',
        { id: bh.input.query.id },
        undefined,
        undefined,
        undefined
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_A4PYW5StuV5lQnsK(bh, parentSpanInst);
      //appendnew_next_sd_kTir02TxqfzL0zPa
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kTir02TxqfzL0zPa',
        spanInst,
        'sd_kTir02TxqfzL0zPa'
      );
    }
  }

  async sd_A4PYW5StuV5lQnsK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_A4PYW5StuV5lQnsK',
      parentSpanInst
    );
    try {
      console.log(bh.local.response);
      bh.local.response = {
        statusCode: 200,
        response: bh.local?.response,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_YrAKHCKmR1iALJLV(bh, parentSpanInst);
      //appendnew_next_sd_A4PYW5StuV5lQnsK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_A4PYW5StuV5lQnsK',
        spanInst,
        'sd_A4PYW5StuV5lQnsK'
      );
    }
  }

  async sd_YrAKHCKmR1iALJLV(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.response.statusCode).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_YrAKHCKmR1iALJLV');
    }
  }

  async sd_8mLc2SNWAJ0bnMIz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_8mLc2SNWAJ0bnMIz',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 400,
        message: bh.error?.message,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_YrAKHCKmR1iALJLV(bh, parentSpanInst);
      //appendnew_next_sd_8mLc2SNWAJ0bnMIz
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8mLc2SNWAJ0bnMIz',
        spanInst,
        'sd_8mLc2SNWAJ0bnMIz'
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
      (await this.sd_COlhoBwOLVNzwPCE(bh, parentSpanInst))
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
  async sd_COlhoBwOLVNzwPCE(bh, parentSpanInst) {
    const catchConnectedNodes = ['sd_8mLc2SNWAJ0bnMIz', 'sd_YrAKHCKmR1iALJLV'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.sd_8mLc2SNWAJ0bnMIz(bh, parentSpanInst);
    //appendnew_next_sd_COlhoBwOLVNzwPCE
    return true;
  }
  //appendnew_flow_get_user_by_id_Catch
}
