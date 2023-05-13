import React from 'react'

import { Box, Text } from '@chakra-ui/react'
import { Login } from '../components/authentication/login'
import styles from '../styles/home.module.css'

// const menuItemProps = {
//   color: 'white',
//   variant: 'ghost',
//   bg: 'gray.18',
//   borderRadius: 0,
//   w: '100%',
//   mb: '1px',
//   py: '21px',
//   height: 'unset',
//   justifyContent: 'left',
//   px: '20px',
//   _hover: { bg: 'gray.18' },
//   _active: { bg: 'gray.18' },
//   _focus: { bg: 'gray.18' },
// }

// export const Header = ({ onClick }) => {
export const Header = () => {
  return (
    <div className={styles.header}>
      <Box
        display="flex"
        px={44}
        h={20}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Text color="white">TokenTalk</Text>
        </Box>
        <Box>
          <Login />
        </Box>
      </Box>
    </div>
  )
}
