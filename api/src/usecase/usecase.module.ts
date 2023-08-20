import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { JwtModule } from '@nestjs/jwt'

import { AnswerBonusQuestion } from '@app/usecase/answer-bonus-question'
import { CreateBonusQuestions } from '@app/usecase/create-bonus-questions'
import { CreateCoupon } from '@app/usecase/create-coupon'
import { CreateUser } from '@app/usecase/create-user'
import { CreatePartner } from '@app/usecase/create-partner'
import { ExportLeads } from '@app/usecase/export-leads'
import { GenerateResumeAndTrivia } from '@app/usecase/generate-resume-and-trivia'
import { Login } from '@app/usecase/login'
import { RedeemCoupon } from '@app/usecase/redeem-coupon'
import { RetrieveCoupons } from '@app/usecase/retrieve-coupons'
import { RetrieveUserInfo } from '@app/usecase/retrieve-user-info'
import { SaveTriviaAnswers } from '@app/usecase/save-trivia-answers'
import CouponEntity from '@app/entity/coupon.entity'
import PartnerEntity from '@app/entity/partner.entity'
import PersonEntity from '@app/entity/person.entity'
import QuestionBonusAnswerEntity from '@app/entity/question-bonus-answer.entity'
import QuestionBonusEntity from '@app/entity/question-bonus.entity'
import TransactionEntity from '@app/entity/transaction.entity'
import TriviaHistoryEntity from '@app/entity/trivia-history.entity'
import UserTriviaConfigEntity from '@app/entity/user-trivia-config.entity'
import UserEntity from '@app/entity/user.entity'
import WalletEntity from '@app/entity/wallet.entity'
import { AdapterModule } from '@app/adapter/adapter.module'

@Module({
  imports: [
    JwtModule.register({ secret: 'hard!to-guess_secret' }),
    TypeOrmModule.forFeature([
      CouponEntity,
      PartnerEntity,
      PersonEntity,
      QuestionBonusAnswerEntity,
      QuestionBonusEntity,
      TransactionEntity,
      TriviaHistoryEntity,
      UserTriviaConfigEntity,
      UserEntity,
      WalletEntity
    ]),
    AdapterModule
  ],
  providers: [
    AnswerBonusQuestion,
    CreateBonusQuestions,
    CreateCoupon,
    CreateUser,
    CreatePartner,
    ExportLeads,
    GenerateResumeAndTrivia,
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
    GenerateResumeAndTrivia,
    Login,
    RedeemCoupon,
    RetrieveCoupons,
    RetrieveUserInfo,
    SaveTriviaAnswers
  ]
})
export class UseCaseModule {}
