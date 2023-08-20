export const promptGenerateResumeAndTriviaTemplate = (textBase: string): string =>
  `You will be provided with text delimited by '''.
  Generate a abstract of this text, highlighting the main topics.
  Make sure that the output is based only on the provided text.
  Do not make any conclusions during the summary and \
  just summarize the text
  Use at most 300 words or 10 sentences.

  In addition, generate five questions related with text\
  delimited by '''.Provide four alternatives and the correct \
  answer for each question.

  Translate the abstract, the questions and the alternatives to brazilian portuguese

  Text:
  ${textBase}


  Provide the output in JSON format with the following  format:
  [
    {
      id: string,
      title: string,
      options: [
        {
          id: string,
          text: string
        }
      ],
      correctOptionId: string
    }
  ]`;
