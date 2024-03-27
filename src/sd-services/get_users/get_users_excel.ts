// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { DmUtils } from '../../utils/ndefault-datamodel/find/dmUtils'; //_splitter_
//append_imports_end
export class get_users_excel {
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
    this.serviceName = 'get_users_excel';
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
      instance = new get_users_excel(
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
    //appendnew_flow_get_users_excel_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: get_users_excel');
    //appendnew_flow_get_users_excel_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: get_users_excel');

    this.app['get'](
      `${this.serviceBasePath}/users/download`,
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
          bh = await this.sd_Oh51bSuHLu6pKQYP(bh, parentSpanInst);
          //appendnew_next_sd_IHDlHNJ3H2avxC6f
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_IHDlHNJ3H2avxC6f');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'jwt',
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_get_users_excel_HttpIn
  }
  //   service flows_get_users_excel

  //appendnew_flow_get_users_excel_start

  async sd_Oh51bSuHLu6pKQYP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Oh51bSuHLu6pKQYP',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_EQ0uxl70E3kjCZ8g');
      bh.local.response = await dmUtilsInst.find(
        '_EN_ihm2p9b723',
        {},
        undefined,
        undefined,
        undefined
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_VIannuTGUij1G78t(bh, parentSpanInst);
      //appendnew_next_sd_Oh51bSuHLu6pKQYP
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Oh51bSuHLu6pKQYP',
        spanInst,
        'sd_Oh51bSuHLu6pKQYP'
      );
    }
  }

  async sd_VIannuTGUij1G78t(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_VIannuTGUij1G78t',
      parentSpanInst
    );
    try {
      // const xlsx = require('xlsx');

      // const ws = xlsx.utils.json_to_sheet(bh.local?.response);
      // const wb = xlsx.utils.book_new();
      // xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
      // const excelBuffer = xlsx.write(wb, { type: 'buffer', bookType: 'xlsx' });

      // bh.input.response = {
      //     statusCode:200,
      //     body:excelBuffer
      // }

      // bh.local.headers={
      //  'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      //  'Content-Disposition': 'attachment; filename="data.xlsx"'
      // }
      const { parse: json2csv } = require('json2csv');

      // Assuming bh.local?.response contains the JSON data
      const json = bh.local?.response;

      // Convert JSON to CSV
      const csv = json2csv(json);

      // Set the response body as CSV data
      bh.input.response = {
        statusCode: 200,
        body: csv,
      };

      // Set headers for CSV response
      bh.local.headers = {
        'Content-Type': 'text/csv',
        'Content-Disposition': 'attachment; filename="data.csv"',
      };

      this.tracerService.sendData(spanInst, bh);
      await this.sd_crCp3vpOosvA7CpA(bh, parentSpanInst);
      //appendnew_next_sd_VIannuTGUij1G78t
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VIannuTGUij1G78t',
        spanInst,
        'sd_VIannuTGUij1G78t'
      );
    }
  }

  async sd_crCp3vpOosvA7CpA(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.headers);

      const readable = new Readable();
      readable._read = () => {}; // _read is required but you can noop it
      // setting buffer
      readable.push(bh.input.response.body);
      readable.push(null);
      // setting status
      bh.web.res.status(bh.input.response.statusCode);
      readable.pipe(bh.web.res);
      bh.readable = readable;
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_crCp3vpOosvA7CpA');
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
  //appendnew_flow_get_users_excel_Catch
}
