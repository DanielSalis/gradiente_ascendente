import { Module } from '@nestjs/common'

import { HealthCheckAction } from '@app/action/healthcheck.action'
import { UseCaseModule } from '@app/usecase/usecase.module'
import { AnswerBonusQuestionAction } from '@app/action/answer-bonus-question.action'
import { CreateBonusQuestionsAction } from '@app/action/create-bonus-questions.action'
import { CreateCouponAction } from '@app/action/create-coupon.action'
import { CreatePartnerAction } from '@app/action/create-partner.action'
import { CreateUserAction } from '@app/action/create-user.action'
import { ExportLeadsAction } from '@app/action/export-leads.action'
import { GenerateResumeAndTriviaAction } from '@app/action/generate-resume-and-trivia.action'
import { LoginAction } from '@app/action/login.action'
import { RedeemCouponAction } from '@app/action/redeem-coupon.action'
import { RetrieveCouponsAction } from '@app/action/retrieve-coupons'
import { RetrieveUserInfoAction } from '@app/action/retrieve-user-info.action'
import { SaveTriviaAnswersAction } from '@app/action/save-trivia-answers'
import { AuthModule } from '@app/auth/auth.module'

@Module({
  imports: [AuthModule, UseCaseModule],
  controllers: [
    HealthCheckAction,
    AnswerBonusQuestionAction,
    CreateBonusQuestionsAction,
    CreateCouponAction,
    CreatePartnerAction,
    CreateUserAction,
    ExportLeadsAction,
    GenerateResumeAndTriviaAction,
    LoginAction,
    RedeemCouponAction,
    RetrieveCouponsAction,
    RetrieveUserInfoAction,
    SaveTriviaAnswersAction
  ]
})
export class ActionModule {}
