import { Body, ClassSerializerInterceptor, Controller, Get, Inject, ParseUUIDPipe, Post, Query, UseGuards, UseInterceptors} from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices"
import { ApiBearerAuth, ApiQuery, ApiResponse, ApiTags } from "@nestjs/swagger";
import { PrinterFileSaveDto } from "src/domain/dtos/pinter-file-save.dto"
import { PrinterFileSaveReturnDto } from "src/domain/dtos/printer-file-save-return.dto"
import { PrinterFile } from "src/domain/printer-update/models/printer-file"
import { IPrinterFileService } from "src/domain/printer-update/servicces/interfaces/printer-file.service.interface"

@ApiTags('Printer File')
@Controller('printer-file')
export class PrinterFileController {
    
    constructor(
        @Inject('IPrinterFileService') private printerFileService: IPrinterFileService,
    ) { }

    @Post()
    @ApiResponse({status: 200, type: PrinterFileSaveReturnDto})
    async findOne(@Body() createCatDto: PrinterFileSaveDto): Promise<PrinterFileSaveReturnDto> {
        return this.printerFileService.savePrinterFile(createCatDto as PrinterFile)
            .then(pf => new PrinterFileSaveReturnDto());
    }

}