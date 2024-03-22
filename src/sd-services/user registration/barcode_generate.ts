// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cloudinary from 'cloudinary'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
//append_imports_end
export class barcode_generate {
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
    this.serviceName = 'barcode_generate';
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
      instance = new barcode_generate(
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
    //appendnew_flow_barcode_generate_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: barcode_generate');
    //appendnew_flow_barcode_generate_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: barcode_generate');
    //appendnew_flow_barcode_generate_HttpIn
  }
  //   service flows_barcode_generate

  async barcodeGenerate(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'barcodeGenerate',
      parentSpanInst
    );

    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Wwyn7okkrk3XJsvJ(bh, parentSpanInst);
      //appendnew_next_barcodeGenerate
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_e4yEQrgTQj2onEUm',
        spanInst,
        'barcodeGenerate'
      );
    }
  }
  //appendnew_flow_barcode_generate_start

  async sd_Wwyn7okkrk3XJsvJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Wwyn7okkrk3XJsvJ',
      parentSpanInst
    );
    try {
      console.log(bh.local.response);

      const id = bh.local.response?.id;
      const email = bh.local.response?.email;

      console.log(id);
      console.log(email);

      const QRCode = require('qrcode');
      const path = require('path');
      const fs = require('fs');

      const qrCodeDirectory = 'qrcodes';
      const qrCodeFileName = `qr${id}.png`;
      const qrCodePath = path.join(__dirname, qrCodeDirectory, qrCodeFileName);
      console.log(qrCodePath);
      let strid = String(id);

      fs.mkdirSync(path.join(__dirname, qrCodeDirectory), { recursive: true });
      bh.local.qrpath = qrCodePath;
      // Generate a QR code for a text string
      QRCode.toFile(
        qrCodePath,
        strid,
        {
          margin: 2,
          color: {
            dark: '#000',
            light: '#FFF',
          },
        },
        (err) => {
          if (err) throw err;
          console.log('QR code saved!');
        }
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.qrUpload(bh, parentSpanInst);
      //appendnew_next_sd_Wwyn7okkrk3XJsvJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Wwyn7okkrk3XJsvJ',
        spanInst,
        'sd_Wwyn7okkrk3XJsvJ'
      );
    }
  }

  async qrUpload(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('qrUpload', parentSpanInst);
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

      bh.local.cdresponse = await cloudinary.v2.uploader.upload(
        bh.local.qrpath,
        { folder: '' }
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_epOuC9efCNkLHYAN(bh, parentSpanInst);
      //appendnew_next_qrUpload
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BAkftrEkvH2Gtsl5',
        spanInst,
        'qrUpload'
      );
    }
  }

  async sd_epOuC9efCNkLHYAN(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_epOuC9efCNkLHYAN',
      parentSpanInst
    );
    try {
      console.log('qr cloudinaryl upload aakikynju');

      console.log(bh.local.cdresponse?.url);

      const nodemailer = require('nodemailer');
      console.log(`${process.env.NM_SENDERMAIL}`);
      console.log(`${process.env.NM_PASS}`);

      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: `${process.env.NM_SENDERMAIL}`, // your email
          pass: `${process.env.NM_PASS}`, // your password
        },
      });

      // setup email data with unicode symbols
      let mailOptions = {
        from: `${process.env.NM_SENDERMAIL}`, // sender address
        to: bh.local.response?.email, // list of receivers
        subject: 'Goodies!', // Subject line
        text: `Hi , your goodiees qr is here : ${bh.local.cdresponse?.url}`,
      };

      // send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      });

      console.log('eni  food kycht baaki');
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_epOuC9efCNkLHYAN
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_epOuC9efCNkLHYAN',
        spanInst,
        'sd_epOuC9efCNkLHYAN'
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
  //appendnew_flow_barcode_generate_Catch
}
