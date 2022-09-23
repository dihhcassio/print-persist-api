import { ApiProperty } from "@nestjs/swagger"

export class PrinterFileSaveDto{
    @ApiProperty()
    name: string;
    @ApiProperty()
    content: string;
}