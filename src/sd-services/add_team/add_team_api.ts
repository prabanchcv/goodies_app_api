// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { validateNode } from '../../utils/ndefault-datamodel/find/validateUtil'; //_splitter_
import * as SSD_SERVICE_ID_sd_uR32r7vvGH0HEaxs from './add_team_service'; //_splitter_
//append_imports_end
export class add_team_api {
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
    this.serviceName = 'add_team_api';
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
      instance = new add_team_api(
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
    //appendnew_flow_add_team_api_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: add_team_api');
    //appendnew_flow_add_team_api_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: add_team_api');

    this.app['post'](
      `${this.serviceBasePath}/teams`,
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
          bh = await this.sd_zleEPqEYG5xv2y8b(bh, parentSpanInst);
          //appendnew_next_sd_Oi9z8tmyBKcKvEie
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Oi9z8tmyBKcKvEie');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'jwt',
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_add_team_api_HttpIn
  }
  //   service flows_add_team_api

  //appendnew_flow_add_team_api_start

  async sd_zleEPqEYG5xv2y8b(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zleEPqEYG5xv2y8b',
      parentSpanInst
    );
    try {
      validateNode('_EN_l3xabmnfza', bh.input.body, true);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_G0RxEdkj7AabmEYZ(bh, parentSpanInst);
      //appendnew_next_sd_zleEPqEYG5xv2y8b
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zleEPqEYG5xv2y8b',
        spanInst,
        'sd_zleEPqEYG5xv2y8b'
      );
    }
  }

  async sd_G0RxEdkj7AabmEYZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_G0RxEdkj7AabmEYZ',
      parentSpanInst
    );
    try {
      console.log(bh.input.body, 'bodd');
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_jbCH5aApYFzIGHvh(bh, parentSpanInst);
      //appendnew_next_sd_G0RxEdkj7AabmEYZ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_G0RxEdkj7AabmEYZ',
        spanInst,
        'sd_G0RxEdkj7AabmEYZ'
      );
    }
  }

  async sd_jbCH5aApYFzIGHvh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jbCH5aApYFzIGHvh',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_uR32r7vvGH0HEaxsInstance: SSD_SERVICE_ID_sd_uR32r7vvGH0HEaxs.add_team_service =
        SSD_SERVICE_ID_sd_uR32r7vvGH0HEaxs.add_team_service.getInstance();
      bh = await SSD_SERVICE_ID_sd_uR32r7vvGH0HEaxsInstance.addTeam(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_mwqslfkZan10gfWb(bh, parentSpanInst);
      //appendnew_next_sd_jbCH5aApYFzIGHvh
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jbCH5aApYFzIGHvh',
        spanInst,
        'sd_jbCH5aApYFzIGHvh'
      );
    }
  }

  async sd_mwqslfkZan10gfWb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_mwqslfkZan10gfWb',
      parentSpanInst
    );
    try {
      if (bh.local.result.length > 0) {
        throw new Error('Team Already Registered');
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_GFuPLAMJGARTfF1M(bh, parentSpanInst);
      //appendnew_next_sd_mwqslfkZan10gfWb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mwqslfkZan10gfWb',
        spanInst,
        'sd_mwqslfkZan10gfWb'
      );
    }
  }

  async sd_GFuPLAMJGARTfF1M(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_GFuPLAMJGARTfF1M',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_uR32r7vvGH0HEaxsInstance: SSD_SERVICE_ID_sd_uR32r7vvGH0HEaxs.add_team_service =
        SSD_SERVICE_ID_sd_uR32r7vvGH0HEaxs.add_team_service.getInstance();
      bh = await SSD_SERVICE_ID_sd_uR32r7vvGH0HEaxsInstance.insertTeam(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_et5yvVC1FD9RSeIT(bh, parentSpanInst);
      //appendnew_next_sd_GFuPLAMJGARTfF1M
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GFuPLAMJGARTfF1M',
        spanInst,
        'sd_GFuPLAMJGARTfF1M'
      );
    }
  }

  async sd_et5yvVC1FD9RSeIT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_et5yvVC1FD9RSeIT',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 201,
        response: 'User Created successfully',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_wqnmAh9VMvicdUGW(bh, parentSpanInst);
      //appendnew_next_sd_et5yvVC1FD9RSeIT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_et5yvVC1FD9RSeIT',
        spanInst,
        'sd_et5yvVC1FD9RSeIT'
      );
    }
  }

  async sd_wqnmAh9VMvicdUGW(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.response.statusCode).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_wqnmAh9VMvicdUGW');
    }
  }

  async sd_xh9PcwJ6vaZOU81B(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xh9PcwJ6vaZOU81B',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 400,
        message: bh.error?.message,
      };

      this.tracerService.sendData(spanInst, bh);
      await this.sd_wqnmAh9VMvicdUGW(bh, parentSpanInst);
      //appendnew_next_sd_xh9PcwJ6vaZOU81B
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xh9PcwJ6vaZOU81B',
        spanInst,
        'sd_xh9PcwJ6vaZOU81B'
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
      (await this.sd_LdI5xYAsN0GeOV1G(bh, parentSpanInst))
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
  async sd_LdI5xYAsN0GeOV1G(bh, parentSpanInst) {
    const catchConnectedNodes = ['sd_xh9PcwJ6vaZOU81B', 'sd_wqnmAh9VMvicdUGW'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.sd_xh9PcwJ6vaZOU81B(bh, parentSpanInst);
    //appendnew_next_sd_LdI5xYAsN0GeOV1G
    return true;
  }
  //appendnew_flow_add_team_api_Catch
}
