import {
  INestApplication,
  Injectable,
  Logger,
  type OnModuleInit,
} from "@nestjs/common"
import { Prisma, PrismaClient } from "@repo/database"

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger("prisma")

  constructor() {
    super({
      log: [
        { emit: "event", level: "query" },
        { emit: "stdout", level: "info" },
        { emit: "stdout", level: "warn" },
        { emit: "stdout", level: "error" },
      ],
      errorFormat: "colorless",
    })
  }

  async onModuleInit(): Promise<void> {
    await this.$connect()

    // it will print prisma query sql, maybe leak sensitive data
    this.$on("query" as never, (e: Prisma.QueryEvent) => {
      this.logger.log(e)
    })
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on("beforeExit" as never, async () => {
      await app.close()
    })
  }
}
