import { Get, JsonController } from 'routing-controllers'

@JsonController('/')
export class IndexController {
  @Get('/')
  index(): { success: true } {
    return { success: true }
  }
}
