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
          <AccordionItem mx="auto" width="75%">
            <h2>
              <AccordionButton _expanded={{ bg: '#E0FBFC', color: 'black' }}>
                <Box flex="1" textAlign="left" padding="1.5rem">
                  <Trans>
                    <Text fontSize="1.5rem">Question 1</Text>
                  </Trans>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
              voluptates architecto inventore soluta! Necessitatibus doloribus,
              reprehenderit eos officiis labore soluta modi ad facilis non
              consequatur quibusdam, ex quaerat optio ipsam.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem mx="auto" width="75%">
            <h2>
              <AccordionButton _expanded={{ bg: '#E0FBFC', color: 'black' }}>
                <Box flex="1" textAlign="left" padding="1.5rem">
                  <Text fontSize="1.5rem">Question 2</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
              voluptates architecto inventore soluta! Necessitatibus doloribus,
              reprehenderit eos officiis labore soluta modi ad facilis non
              consequatur quibusdam, ex quaerat optio ipsam.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem mx="auto" width="75%">
            <h2>
              <AccordionButton _expanded={{ bg: '#E0FBFC', color: 'black' }}>
                <Box flex="1" textAlign="left" padding="1.5rem">
                  <Text fontSize="1.5rem">Question 3</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
              voluptates architecto inventore soluta! Necessitatibus doloribus,
              reprehenderit eos officiis labore soluta modi ad facilis non
              consequatur quibusdam, ex quaerat optio ipsam.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem mx="auto" width="75%">
            <h2>
              <AccordionButton _expanded={{ bg: '#E0FBFC', color: 'black' }}>
                <Box flex="1" textAlign="left" padding="1.5rem">
                  <Text fontSize="1.5rem">Question 4</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
              voluptates architecto inventore soluta! Necessitatibus doloribus,
              reprehenderit eos officiis labore soluta modi ad facilis non
              consequatur quibusdam, ex quaerat optio ipsam.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem mx="auto" width="75%">
            <h2>
              <AccordionButton _expanded={{ bg: '#E0FBFC', color: 'black' }}>
                <Box flex="1" textAlign="left" padding="1.5rem">
                  <Text fontSize="1.5rem">Question 5</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
              voluptates architecto inventore soluta! Necessitatibus doloribus,
              reprehenderit eos officiis labore soluta modi ad facilis non
              consequatur quibusdam, ex quaerat optio ipsam.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Text>
    </Flex>
  )
}
