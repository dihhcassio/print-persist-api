import { PrinterFileSaveReturnDto } from "src/domain/dtos/printer-file-save-return.dto"
import { PrinterFile } from "../../models/printer-file"

export interface IPrinterFileService{
    savePrinterFile(printerFile: PrinterFile):PromiseLike<PrinterFileSaveReturnDto>;
}