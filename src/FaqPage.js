import {
  Flex,
  Text,
  Heading,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import React from 'react'
import { Trans } from '@lingui/macro'

export const FaqPage = () => {
  return (
    <Flex minH="30rem" width="100%" flexDirection="column">
      <Heading mx="auto" my="2rem" height="5rem">
        <Trans>Frequently Asked Questions</Trans>
      </Heading>
      <Text>
        <Accordion allowMultiple>
          {/* Question 1 */}
          <AccordionItem mx="auto" width="75%">
            <h2>
              <AccordionButton _expanded={{ bg: '#E0FBFC', color: 'black' }}>
                <Box flex="1" textAlign="left" padding="1.5rem">
                  <Text fontSize="1.5rem"><Trans>What information do I need to create an account?</Trans></Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <Trans>You will need some basic information to use Friendly Loans:</Trans>
              <Text my="2rem">
              <b><Trans>First and Last Names</Trans></b> <Trans>(as it appears on your Identification Document)</Trans>
              </Text>

              <Text my="2rem">
              <b><Trans>Email Address</Trans></b> <Trans>(please use a secure email address you use frequently)</Trans>
              </Text>

              <Text fontWeight="bold">
              <Trans>Account Number</Trans>
              </Text>

              <Text>
              <Trans>(This should be at the top right corner of the loan statement you received in the mail.)</Trans>
              </Text>

              <Text>
              <Trans>If you have not received your loan statement, please contact</Trans> <b><a href="tel: 1800-IDK-SOME">(+1) 800-IDK-SOME</a></b>
              </Text>
            </AccordionPanel>
          </AccordionItem>

          {/* Question 2 */}
          <AccordionItem mx="auto" width="75%">
            <h2>
              <AccordionButton _expanded={{ bg: '#E0FBFC', color: 'black' }}>
                <Box flex="1" textAlign="left" padding="1.5rem">
                  
                    <Text fontSize="1.5rem"><Trans>I forgot my password. What now?</Trans></Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <Trans>
              Unfortunately, you will have to contact our customer support centre. Reach out at Customer Support Centre at: </Trans>
              <Text py="2em" fontWeight="bold">
              <a href="mailto: example@example.ca">example@example.ca</a>
              </Text>

              <Text fontWeight="bold">
              <a href="tel: 1800-IDK-SOME">(+1) 800-IDK-SOME</a>
              </Text>

              <Text>
                <Trans>
                (Available from 9:00 AM to 10:00 PM - Monday to Friday)</Trans>
              </Text>

              <Text>
                <Trans>
                Times listed are in Atlantic Daylight Time.</Trans>
              </Text>

              <Text my="2rem">
                <Trans>
                Having any information related to your account will help us resolve your issue immediately. We will still guide you in the event you are unable to present them.</Trans>
              </Text>
            </AccordionPanel>
          </AccordionItem>


          {/* Question 3 */}
          <AccordionItem mx="auto" width="75%">
            <h2>
              <AccordionButton _expanded={{ bg: '#E0FBFC', color: 'black' }}>
                <Box flex="1" textAlign="left" padding="1.5rem">
                  <Text fontSize="1.5rem"><Trans>My credentials were stolen. What should I do?</Trans></Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <Trans>
              It is your responsibility to keep account information secure. Never share this information with anyone.</Trans>

              <Text my="0.5rem">
                <Trans>
              If you believe your Account Details were stolen, please contact </Trans> <b><a href="tel: (+1) 800-YOU-LOST"><Trans>Friendly Loans Identity Theft Report Center</Trans></a></b><Trans>and local law enforcement authorities.</Trans>
              </Text>

              <Text>
                <Trans>
                Friendly Loans Customer Support
                </Trans>
              </Text>

              <Text fontWeight="bolded">
              <a href="tel: 1800-YOU-LOST"><b>(+1) 800-YOU-LOST</b></a>
              </Text>
            </AccordionPanel>
          </AccordionItem>


          {/* Question 4 */}
          <AccordionItem mx="auto" width="75%">
            <h2>
              <AccordionButton _expanded={{ bg: '#E0FBFC', color: 'black' }}>
                <Box flex="1" textAlign="left" padding="1.5rem">
                  <Text fontSize="1.5rem">Should I be using Friendly Loans?</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              Friendly Loans is a service only available to students attending a post-secondary institution (College / University) in Nova Scotia to access their student loans.
            </AccordionPanel>
          </AccordionItem>

          {/* Question 5 */}
          <AccordionItem mx="auto" width="75%">
            <h2>
              <AccordionButton _expanded={{ bg: '#E0FBFC', color: 'black' }}>
                <Box flex="1" textAlign="left" padding="1.5rem">
                  <Text fontSize="1.5rem">Do you offer in person services?</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              Unfortunately we do not offer services in person.
            </AccordionPanel>
          </AccordionItem>



        </Accordion>
      </Text>
    </Flex>
  )
}
