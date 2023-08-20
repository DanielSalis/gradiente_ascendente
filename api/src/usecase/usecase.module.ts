import { Module } from '@nestjs/common'

import { AnswerBonusQuestion } from '@app/usecase/answer-bonus-question'
import { CreateBonusQuestions } from '@app/usecase/create-bonus-questions'
import { CreateCoupon } from '@app/usecase/create-coupon'
import { CreateUser } from '@app/usecase/create-user'
import { CreatePartner } from '@app/usecase/create-partner'
import { ExportLeads } from '@app/usecase/export-leads'
import { GenerateResume } from '@app/usecase/generate-resume'
import { GenerateTrivia } from '@app/usecase/generate-trivia'
import { Login } from '@app/usecase/login'
import { RedeemCoupon } from '@app/usecase/redeem-coupon'
import { RetrieveCoupons } from '@app/usecase/retrieve-coupons'
import { RetrieveUserInfo } from '@app/usecase/retrieve-user-info'
import { SaveTriviaAnswers } from '@app/usecase/save-trivia-answers'

@Module({
  providers: [
    AnswerBonusQuestion,
    CreateBonusQuestions,
    CreateCoupon,
    CreateUser,
    CreatePartner,
    ExportLeads,
    GenerateResume,
    GenerateTrivia,
    Login,
    RedeemCoupon,
    RetrieveCoupons,
    RetrieveUserInfo,
    SaveTriviaAnswers
  ],
  exports: [
    AnswerBonusQuestion,
    CreateBonusQuestions,
    CreateCoupon,
    CreateUser,
    CreatePartner,
    ExportLeads,
    GenerateResume,
    GenerateTrivia,
    Login,
    RedeemCoupon,
    RetrieveCoupons,
    RetrieveUserInfo,
    SaveTriviaAnswers
  ]
})
export class UseCaseModule {}
