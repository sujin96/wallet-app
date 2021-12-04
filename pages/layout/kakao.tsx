import { Box, Button, Stack } from "@mui/material";
import React, { useState } from "react";
import Chat from "./tab/chat";
import Gift from "./tab/Gift";
import Member from "./tab/member";
import More from "./tab/more";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChatIcon from '@mui/icons-material/Chat';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SettingsIcon from '@mui/icons-material/Settings';


export default function Kakao() {

    const [content, setContent] = useState<any>('내용입니다.')
    const [title, setTitle] = useState<any>('카카오톡')

    function onClickMember() {
        setContent(<Member />)
        setTitle('회원 정보')
    }

    function onClickChat() {
        setContent(<Chat />)
        setTitle('채팅')
    }

    function onClickGift() {
        setContent(<Gift />)
        setTitle('선물하기')
    }

    function onClickMore() {
        setContent(<More />)
        setTitle('더보기')
    }
    return <>
        <Stack sx={{ height: '100vh' }}>
            <Stack direction="row" alignItems="center" sx={{ background: 'yellow', height: 50, px: 2 }}>
                <Box sx={{ flexGrow: 1, fontSize: 20}}>{title}</Box>
                <Button><SettingsIcon /></Button>
            </Stack>

            <Box sx={{flexGrow: 1}}>{content}</Box>

            <Stack direction="row" alignItems="center" justifyContent="space-around" sx={{ height: 50, background: 'gray' }}>
                <Button sx={{ color: 'white' }} onClick={onClickMember}><PersonOutlineIcon /></Button>
                <Button sx={{ color: 'white' }} onClick={onClickChat}><ChatIcon /></Button>
                <Button sx={{ color: 'white' }} onClick={onClickGift}><CardGiftcardIcon /></Button>
                <Button sx={{ color: 'white' }} onClick={onClickMore}><MoreHorizIcon /></Button>
            </Stack>
        </Stack>
    </>
}