import { Box, Button, Stack } from "@mui/material";
import React, { useState } from "react";

export default function Facebook() {
const [content, setContent] = useState('내용입니다.')

function onClickHome(){
    setContent('홈 내용입니다.')
}

function onClickMember(){
    setContent('회원 내용입니다.')
}

function onClickGroup(){
    setContent('그룹 내용입니다.')
}

function onClickGaming(){
    setContent('게이밍 내용입니다.')
}

    return <>
        <Stack sx={{ height: '100vh' }}>
            <Stack direction="row" alignItems="center" sx={{ background: 'blue', height: 50, px: 2 }}>
                <Box sx={{ flexGrow: 1, fontSize: 20, fontWeight: 'bold' }}>Facebook</Box>
                <Button sx={{color:'white'}}>설정</Button>
            </Stack>
            <Stack direction="row" alignItems="center" justifyContent="space-around" sx={{ background: 'gray' }} >
                <Button sx={{color: 'white'}} onClick = {onClickHome}>홈</Button>
                <Button sx={{color: 'white'}} onClick = {onClickMember}>회원</Button>
                <Button sx={{color: 'white'}} onClick = {onClickGroup}>그룹</Button>
                <Button sx={{color: 'white'}} onClick = {onClickGaming}>게이밍</Button>
            </Stack>


            <Stack alignItems="center" justifyContent="space-around" sx={{ flexGrow: 1 }}>
            <Box >{content}</Box>
            </Stack>

            <Stack direction="row">
                <Box sx={{ flexGrow: 1 }}>ⓒ2021 Facebook</Box>
                <Box>sitemap</Box>
            </Stack>
        </Stack>
    </>
}