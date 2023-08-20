import { Module } from '@nestjs/common'

import { HealthCheckAction } from '@app/action/healthcheck.action'
import { UseCaseModule } from '@app/usecase/usecase.module'
import { AnswerBonusQuestionAction } from '@app/action/answer-bonus-question.action'
import { CreateBonusQuestionsAction } from '@app/action/create-bonus-questions.action'
import { CreateCouponAction } from '@app/action/create-coupon.action'
import { CreatePartnerAction } from '@app/action/create-partner.action'
import { CreateUserAction } from '@app/action/create-user.action'
import { ExportLeadsAction } from '@app/action/export-leads.action'
import { GenerateResumeAction } from '@app/action/generate-resume.action'
import { GenerateTriviaAction } from '@app/action/generate-trivia.action'
import { LoginAction } from '@app/action/login.action'
import { RedeemCouponAction } from '@app/action/redeem-coupon.action'
import { RetrieveCouponsAction } from '@app/action/retrieve-coupons'
import { RetrieveUserInfoAction } from '@app/action/retrieve-user-info.action'
import { SaveTriviaAnswersAction } from '@app/action/save-trivia-answers'

@Module({
  imports: [UseCaseModule],
  controllers: [
    HealthCheckAction,
    AnswerBonusQuestionAction,
    CreateBonusQuestionsAction,
    CreateCouponAction,
    CreatePartnerAction,
    CreateUserAction,
    ExportLeadsAction,
    GenerateResumeAction,
    GenerateTriviaAction,
    LoginAction,
    RedeemCouponAction,
    RetrieveCouponsAction,
    RetrieveUserInfoAction,
    SaveTriviaAnswersAction
  ]
})
export class ActionModule {}
