import { ClassSerializerInterceptor, Inject, UseInterceptors } from "@nestjs/common"
import { ClientProxy } from "@nestjs/microservices"
import { Observer } from "rxjs"
import { PrinterFile } from "../models/printer-file"
import { IPrinterFileService } from "./interfaces/printer-file.service.interface";


@UseInterceptors(ClassSerializerInterceptor)
export class PrinterFileService implements IPrinterFileService {

    constructor(
        @Inject('SUBSCRIBERS_SERVICE') private subscribersService: ClientProxy,
      ) {}

    savePrinterFile(printerFile: PrinterFile) {
        this.subscribersService.send({
            cmd: 'add-subscriber'
          }, printerFile);

    }
    
}










