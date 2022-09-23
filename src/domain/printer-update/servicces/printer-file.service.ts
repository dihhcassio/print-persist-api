import { PrinterFile } from "../models/printer-file"
import { IPrinterFileService } from "./interfaces/printer-file.service.interface";


export class PrinterFileService implements IPrinterFileService {

    savePrinterFile(printerFile: PrinterFile): Promise<PrinterFile> {
        throw new Error("Method not implemented.")
    }
    
}