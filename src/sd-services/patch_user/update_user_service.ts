// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cloudinary from 'cloudinary'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { GenericRDBMSOperations } from '../../utils/ndefault-sql/ExecuteSql/GenericRDBMSOperations'; //_splitter_
//append_imports_end
export class update_user_service {
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
    this.serviceName = 'update_user_service';
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
      instance = new update_user_service(
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
    //appendnew_flow_update_user_service_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: update_user_service');
    //appendnew_flow_update_user_service_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: update_user_service');
    //appendnew_flow_update_user_service_HttpIn
  }
  //   service flows_update_user_service

  async updateUser(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'updateUser',
      parentSpanInst
    );

    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_9O0TaVNE9OMJovtu(bh, parentSpanInst);
      //appendnew_next_updateUser
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2xmCh4wH32HK71wx',
        spanInst,
        'updateUser'
      );
    }
  }
  //appendnew_flow_update_user_service_start

  async sd_9O0TaVNE9OMJovtu(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9O0TaVNE9OMJovtu',
      parentSpanInst
    );
    try {
      const fs = require('fs');
      const path = require('path');

      // Function to decode base64 image data and save it to a temporary file
      function saveBase64Image(base64Data) {
        // Remove header from base64 string
        // Create buffer from base64 data
        const buffer = Buffer.from(base64Data, 'base64');

        // Generate a unique filename
        const filename = `temp_${Date.now()}.jpg`; // Change extension as per your image format

        // Define path for temporary file
        const tempFilePath = path.join(__dirname, 'temp', filename);
        fs.writeFile(tempFilePath, buffer, (err) => {
          if (err) {
            console.error('Error:', err);
            return;
          }
          console.log('File saved successfully:', tempFilePath);
        });

        return tempFilePath;
      }

      bh.local.file = saveBase64Image(bh.input?.body?.file);

      console.log('heiiiiiiiiiiiiiiiiiiiiiiiiiii');
      bh.input.id = bh.input?.body?.id;
      console.log(bh.local.file);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_3DfyKZrZRXuz6BBq(bh, parentSpanInst);
      //appendnew_next_sd_9O0TaVNE9OMJovtu
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9O0TaVNE9OMJovtu',
        spanInst,
        'sd_9O0TaVNE9OMJovtu'
      );
    }
  }

  async sd_3DfyKZrZRXuz6BBq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3DfyKZrZRXuz6BBq',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        '983957c2-2197-2304-3ba8-02c9a111cd9d',
        'sd_UXwYxKWV4UchM4EW'
      );

      cloudinary.v2.config({
        cloud_name: configObj.cloud_name,
        api_key: configObj.api_key,
        api_secret: configObj.api_secret,
      });

      bh.local.response = await cloudinary.v2.uploader.upload(bh.local.file, {
        folder: '',
      });

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_5hP9jFuUUzb48BiM(bh, parentSpanInst);
      //appendnew_next_sd_3DfyKZrZRXuz6BBq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3DfyKZrZRXuz6BBq',
        spanInst,
        'sd_3DfyKZrZRXuz6BBq'
      );
    }
  }

  async sd_5hP9jFuUUzb48BiM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5hP9jFuUUzb48BiM',
      parentSpanInst
    );
    try {
      console.log('image uplode aaki kynjuuuu');

      console.log(bh.local.response.url);
      console.log(bh.input.id);

      bh.local.query = `UPDATE ${process.env.DB_SCHEMA}.users
SET image = $1 , status = true
WHERE id = $2;`;

      bh.local.queryparams = [bh.local.response.url, bh.input.id];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_JUIuSgls5zXsZwxe(bh, parentSpanInst);
      //appendnew_next_sd_5hP9jFuUUzb48BiM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5hP9jFuUUzb48BiM',
        spanInst,
        'sd_5hP9jFuUUzb48BiM'
      );
    }
  }

  async sd_JUIuSgls5zXsZwxe(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JUIuSgls5zXsZwxe',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_EQ0uxl70E3kjCZ8g'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = bh.local.queryparams;
      params = params ? params : [];
      bh.local.response = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_JUIuSgls5zXsZwxe
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JUIuSgls5zXsZwxe',
        spanInst,
        'sd_JUIuSgls5zXsZwxe'
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
  //appendnew_flow_update_user_service_Catch
}
