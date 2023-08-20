export const promptGenerateResumeAndTriviaTemplate = (textBase: string): string =>
  `You will be provided with text delimited by '''.
  Generate a summary of this text highlighting the main \
  topics.
  Make sure that the output is based only on the provided text.
  Do not make any conclusions during the summary and \
  just summarize the text.
  Use at most 300 words or 10 sentences.

  In addition, generate three questions related with text\
  delimited by '''.Provide four alternatives and the correct \
  answer for each question.

  The sumary content, questions title and options answers text should be in the same language that the text provided  \

  Text:
  ${textBase}


  Provide the output in JSON string follow the pattern bellow, and only the json:

  "{
    "summary": string,
    "questions":   [
      {
        "id": string,
        "id": string,
        "options": [
          {
            "id": string,
            "text": string
          }
        ],
        "correctOptionId": string
      }
    ]
  }"
`
