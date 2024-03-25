// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { DmUtils } from '../../utils/ndefault-datamodel/find/dmUtils'; //_splitter_
//append_imports_end
export class add_team_service {
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
    this.serviceName = 'add_team_service';
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
      instance = new add_team_service(
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
    //appendnew_flow_add_team_service_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: add_team_service');
    //appendnew_flow_add_team_service_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: add_team_service');
    //appendnew_flow_add_team_service_HttpIn
  }
  //   service flows_add_team_service

  async addTeam(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan('addTeam', parentSpanInst);

    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_VCQ7WYqadpPVEtrm(bh, parentSpanInst);
      //appendnew_next_addTeam
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Frkwtwxwj4EGef0h',
        spanInst,
        'addTeam'
      );
    }
  }
  //appendnew_flow_add_team_service_start

  async sd_VCQ7WYqadpPVEtrm(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_VCQ7WYqadpPVEtrm',
      parentSpanInst
    );
    try {
      console.log(bh.input.body, 'bodd');
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_LSW9lhjjZNXaNp0t(bh, parentSpanInst);
      //appendnew_next_sd_VCQ7WYqadpPVEtrm
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VCQ7WYqadpPVEtrm',
        spanInst,
        'sd_VCQ7WYqadpPVEtrm'
      );
    }
  }

  async sd_LSW9lhjjZNXaNp0t(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_LSW9lhjjZNXaNp0t',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_EQ0uxl70E3kjCZ8g');
      bh.local.result = await dmUtilsInst.insert(
        '_EN_373fkobibm',
        bh.input.body
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_7ucP16WwPVFvcKim(bh, parentSpanInst);
      //appendnew_next_sd_LSW9lhjjZNXaNp0t
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LSW9lhjjZNXaNp0t',
        spanInst,
        'sd_LSW9lhjjZNXaNp0t'
      );
    }
  }

  async sd_7ucP16WwPVFvcKim(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7ucP16WwPVFvcKim',
      parentSpanInst
    );
    try {
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
        to: bh.input.body.email, // list of receivers
        subject: 'Goodies!', // Subject line
        text: `Hi We will send the Google Form Link to your Email Adress within 24 Hrs`,
      };

      // send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      });

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_7ucP16WwPVFvcKim
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7ucP16WwPVFvcKim',
        spanInst,
        'sd_7ucP16WwPVFvcKim'
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
  //appendnew_flow_add_team_service_Catch
}
