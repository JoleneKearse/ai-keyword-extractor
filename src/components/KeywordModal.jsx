/* eslint-disable react/prop-types */
import {
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  CircularProgress
} from "@chakra-ui/react"

const KeywordModal = ({ keywords, loading, isOpen, closeModal }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Keywords
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {loading ? (
              <CircularProgress isIndeterminate color="purple.500" />
            ) : (
              <Text>
                {keywords}
              </Text>
            )}
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="purple"
              mr={3}
              onClick={closeModal}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default KeywordModal