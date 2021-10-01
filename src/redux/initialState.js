import { v4 as uuidv4 } from 'uuid';

import messagesImage1 from '../img/avatar-1.jpg'
import messagesImage2 from '../img/avatar-2.jpg'
import messagesImage3 from '../img/avatar-3.jpg'
import messagesImage4 from '../img/avatar-4.jpg'
import messagesImage5 from '../img/avatar-5.jpg'
import messagesImage6 from '../img/avatar-6.jpg'
import messagesImage7 from '../img/avatar-7.jpg'
import messagesImage8 from '../img/avatar-8.jpg'
import messagesImage9 from '../img/avatar-9.jpg'
import messagesImage10 from '../img/avatar-10.jpg'
import messagesImage11 from '../img/avatar-11.jpg'
import messagesImage12 from '../img/avatar-12.jpg'
import messagesImage13 from '../img/avatar-13.jpg'
import messagesImage14 from '../img/avatar-14.jpg'
import messagesImage15 from '../img/avatar-15.jpg'

import followImage1 from '../img/follow-1.jpg'
import followImage2 from '../img/follow-2.jpg'
import followImage3 from '../img/follow-3.jpg'

import exploreImage1 from '../img/sidebar-1.jpg'
import exploreImage2 from '../img/sidebar-2.jpg'
import exploreImage3 from '../img/sidebar-3.jpg'
import exploreImage4 from '../img/sidebar-4.jpg'
import exploreImage5 from '../img/sidebar-5.jpg'
import exploreImage6 from '../img/explore-1.jpg'
import exploreImage7 from '../img/explore-2.jpg'
import exploreImage8 from '../img/explore-3.jpg'
import exploreImage9 from '../img/explore-4.jpg'
import exploreImage10 from '../img/explore-5.jpg'
import exploreImage11 from '../img/explore-6.jpg'
import exploreImage12 from '../img/explore-7.jpg'
import exploreImage13 from '../img/explore-8.jpg'
import exploreImage14 from '../img/explore-9.jpg'
import exploreImage15 from '../img/explore-10.jpg'

import trendingImage1 from '../img/trending-1.jpg'
import trendingImage2 from '../img/trending-2.jpg'
import trendingImage3 from '../img/trending-3.jpg'
import trendingImage4 from '../img/trending-4.jpg'
import trendingImage5 from '../img/trending-5.jpg'

import userAvatar from '../img/avatar.jpeg'
import timelineAvatar1 from '../img/tweet-1a.jpg'
import tweetAttachment1 from '../img/tweet-1a.jpg'
import timelineAvatar2 from '../img/avatar-2.jpg'
import tweetAttachment2a from '../img/tweet-2a.jpg'
import tweetAttachment2b from '../img/tweet-2b.jpg'
import timelineAvatar3 from '../img/avatar-3.jpg'
import tweetAttachment3a from '../img/tweet-3a.jpg'
import timelineAvatar8 from '../img/avatar-8.jpg'
import tweetAttachment8a from '../img/tweet-8a.jpg' 
import tweetAttachment4 from '../img/tweet-4.jpg'
import tweetAttachment5 from '../img/tweet-5.jpg'
import tweetAttachment6 from '../img/tweet-6.jpg'


import galleryImage1 from '../img/gallery-1.jpg'
import galleryImage2 from '../img/gallery-2.jpg'
import galleryImage3 from '../img/gallery-3.jpg'
import galleryImage4 from '../img/gallery-4.jpg'
import galleryImage5 from '../img/gallery-5.jpg'
import galleryImage6 from '../img/gallery-6.jpg'

const UI = {
    menu: [
        {
            id: uuidv4(),
            title: '',
            href: '/',
            svg: '<svg className="menu__svg menu__svg--fill g-svg" viewBox="0 0 24 24"><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" /></svg>'
        },
        {
            id: uuidv4(),
            title: 'inicio',
            href: '/',
            svg: '<svg className="menu__svg menu__svg--stroke g-svg" viewBox="0 0 24 24" ><path d="M22.58 7.35L12.475 1.897c-.297-.16-.654-.16-.95 0L1.425 7.35c-.486.264-.667.87-.405 1.356.18.335.525.525.88.525.16 0 .324-.038.475-.12l.734-.396 1.59 11.25c.216 1.214 1.31 2.062 2.66 2.062h9.282c1.35 0 2.444-.848 2.662-2.088l1.588-11.225.737.398c.485.263 1.092.082 1.354-.404.263-.486.08-1.093-.404-1.355zM12 15.435c-1.795 0-3.25-1.455-3.25-3.25s1.455-3.25 3.25-3.25 3.25 1.455 3.25 3.25-1.455 3.25-3.25 3.25z" /></svg>'
        },
        {
            id: uuidv4(),
            title: 'explorar',
            href: '/explore',
            svg: '<svg className="menu__svg g-svg" viewBox="0 0 24 24"><path d="M21 7.337h-3.93l.372-4.272c.036-.412-.27-.775-.682-.812-.417-.03-.776.27-.812.683l-.383 4.4h-6.32l.37-4.27c.037-.413-.27-.776-.68-.813-.42-.03-.777.27-.813.683l-.382 4.4H3.782c-.414 0-.75.337-.75.75s.336.75.75.75H7.61l-.55 6.327H3c-.414 0-.75.336-.75.75s.336.75.75.75h3.93l-.372 4.272c-.036.412.27.775.682.812l.066.003c.385 0 .712-.295.746-.686l.383-4.4h6.32l-.37 4.27c-.036.413.27.776.682.813l.066.003c.385 0 .712-.295.746-.686l.382-4.4h3.957c.413 0 .75-.337.75-.75s-.337-.75-.75-.75H16.39l.55-6.327H21c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-6.115 7.826h-6.32l.55-6.326h6.32l-.55 6.326z" /></svg>'
        },
        {
            id: uuidv4(),
            title: 'notificaciones',
            href: '/notifications',
            svg: '<svg className="menu__svg g-svg" viewBox="0 0 24 24"><path d="M21.697 16.468c-.02-.016-2.14-1.64-2.103-6.03.02-2.532-.812-4.782-2.347-6.335C15.872 2.71 14.01 1.94 12.005 1.93h-.013c-2.004.01-3.866.78-5.242 2.174-1.534 1.553-2.368 3.802-2.346 6.334.037 4.33-2.02 5.967-2.102 6.03-.26.193-.366.53-.265.838.102.308.39.515.712.515h4.92c.102 2.31 1.997 4.16 4.33 4.16s4.226-1.85 4.327-4.16h4.922c.322 0 .61-.206.71-.514.103-.307-.003-.645-.263-.838zM12 20.478c-1.505 0-2.73-1.177-2.828-2.658h5.656c-.1 1.48-1.323 2.66-2.828 2.66zM4.38 16.32c.74-1.132 1.548-3.028 1.524-5.896-.018-2.16.644-3.982 1.913-5.267C8.91 4.05 10.397 3.437 12 3.43c1.603.008 3.087.62 4.18 1.728 1.27 1.285 1.933 3.106 1.915 5.267-.024 2.868.785 4.765 1.525 5.896H4.38z" /></svg>'
        },
        {
            id: uuidv4(),
            title: 'mensajes',
            href: '/messages',
            svg: '<svg className="menu__svg g-svg" viewBox="0 0 24 24"><path d="M19.25 3.018H4.75C3.233 3.018 2 4.252 2 5.77v12.495c0 1.518 1.233 2.753 2.75 2.753h14.5c1.517 0 2.75-1.235 2.75-2.753V5.77c0-1.518-1.233-2.752-2.75-2.752zm-14.5 1.5h14.5c.69 0 1.25.56 1.25 1.25v.714l-8.05 5.367c-.273.18-.626.182-.9-.002L3.5 6.482v-.714c0-.69.56-1.25 1.25-1.25zm14.5 14.998H4.75c-.69 0-1.25-.56-1.25-1.25V8.24l7.24 4.83c.383.256.822.384 1.26.384.44 0 .877-.128 1.26-.383l7.24-4.83v10.022c0 .69-.56 1.25-1.25 1.25z" /></svg>'
        },
        {
            id: uuidv4(),
            title: 'guardados',
            href: '/bookmarks',
            svg: '<svg className="menu__svg g-svg" viewBox="0 0 24 24"><path d="M19.9 23.5c-.157 0-.312-.05-.442-.144L12 17.928l-7.458 5.43c-.228.164-.53.19-.782.06-.25-.127-.41-.385-.41-.667V5.6c0-1.24 1.01-2.25 2.25-2.25h12.798c1.24 0 2.25 1.01 2.25 2.25v17.15c0 .282-.158.54-.41.668-.106.055-.223.082-.34.082zM12 16.25c.155 0 .31.048.44.144l6.71 4.883V5.6c0-.412-.337-.75-.75-.75H5.6c-.413 0-.75.338-.75.75v15.677l6.71-4.883c.13-.096.285-.144.44-.144z" /></svg>'
        },
        {
            id: uuidv4(),
            title: 'listas',
            href: '/lists',
            svg: '<svg className="menu__svg g-svg" viewBox="0 0 24 24"><path d="M19.75 22H4.25C3.01 22 2 20.99 2 19.75V4.25C2 3.01 3.01 2 4.25 2h15.5C20.99 2 22 3.01 22 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM4.25 3.5c-.414 0-.75.337-.75.75v15.5c0 .413.336.75.75.75h15.5c.414 0 .75-.337.75-.75V4.25c0-.413-.336-.75-.75-.75H4.25z" /><path d="M17 8.64H7c-.414 0-.75-.337-.75-.75s.336-.75.75-.75h10c.414 0 .75.335.75.75s-.336.75-.75.75zm0 4.11H7c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h10c.414 0 .75.336.75.75s-.336.75-.75.75zm-5 4.11H7c-.414 0-.75-.335-.75-.75s.336-.75.75-.75h5c.414 0 .75.337.75.75s-.336.75-.75.75z" /></svg>'
        },
        {
            id: uuidv4(),
            title: 'perfil',
            href: '/profile',
            svg: '<svg className="menu__svg g-svg" viewBox="0 0 24 24"><path d="M12 11.816c1.355 0 2.872-.15 3.84-1.256.814-.93 1.078-2.368.806-4.392-.38-2.825-2.117-4.512-4.646-4.512S7.734 3.343 7.354 6.17c-.272 2.022-.008 3.46.806 4.39.968 1.107 2.485 1.256 3.84 1.256zM8.84 6.368c.162-1.2.787-3.212 3.16-3.212s2.998 2.013 3.16 3.212c.207 1.55.057 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.255-.223-2.71-.743c-.507-.578-.657-1.656-.45-3.205zm11.44 12.868c-.877-3.526-4.282-5.99-8.28-5.99s-7.403 2.464-8.28 5.99c-.172.692-.028 1.4.395 1.94.408.52 1.04.82 1.733.82h12.304c.693 0 1.325-.3 1.733-.82.424-.54.567-1.247.394-1.94zm-1.576 1.016c-.126.16-.316.246-.552.246H5.848c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.114 1.994 6.824 4.85c.06.242.017.48-.12.654z" /></svg>'
        },
    ],
    news: [
        {
            id: uuidv4(),
            topic: 'COVID 19',
            title: 'La periodista ciudadana china Zhang Zhan es encarcelada por informar sobre los inicios del brote de COVID-19 en Wuhan',
            number: '25 mil Tweets',
            img: exploreImage1,
            card: true
        },
        {
            id: uuidv4(),
            topic: 'Política',
            title: 'Mitch McConnell',
            number: 'Tendencias sobre <span className="sidebar__ht">Bernie</span>, <span className="sidebar__ht">Senate</span>',
            img: exploreImage2,
            card: true
        },
        {
            id: uuidv4(),
            topic: 'Toronto Start',
            title: 'Schitt Creek character strikes debate on faking accents, stereotypes',
            number: '116 mil Tweets',
            img: exploreImage3,
            card: true
        },
        {
            id: uuidv4(),
            topic: 'Fútbol',
            title: 'Gareth Bale',
            number: '2,281 Tweets',
            img: exploreImage4,
            card: true
        },
        {
            id: uuidv4(),
            topic: 'Entretenimiento',
            title: 'El diseñador de moda Pierre Cardin murió a los 98 años',
            number: '5 mil Tweets',
            img: exploreImage5,
            card: true
        },
    ],
    follow: [
        {
            id: '@jean3tt3',
            name: 'Jeannette R',
            avatar: followImage1,
        },
        {
            id: '@huhgyw',
            name: 'Hugh Weathersby',
            avatar: followImage2,
        },
        {
            id: '@thomaskbeatty',
            name: 'Thomas K.',
            avatar: followImage3,
        },
    ],
    stats: [
        {
            id: uuidv4(),
            svg: '<svg className="tweet__stats-svg tweet__stats-svg--fill"viewBox="0 0 24 24"><path d="M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM4.25 3.5h15.5c.413 0 .75.337.75.75v9.676l-3.858-3.858c-.14-.14-.33-.22-.53-.22h-.003c-.2 0-.393.08-.532.224l-4.317 4.384-1.813-1.806c-.14-.14-.33-.22-.53-.22-.193-.03-.395.08-.535.227L3.5 17.642V4.25c0-.413.337-.75.75-.75zm-.744 16.28l5.418-5.534 6.282 6.254H4.25c-.402 0-.727-.322-.744-.72zm16.244.72h-2.42l-5.007-4.987 3.792-3.85 4.385 4.384v3.703c0 .413-.337.75-.75.75z" /><circle cx="8.868" cy="8.309" r="1.542" /></svg>',
            href: '#placeholder'
        },
        {
            id: uuidv4(),
            svg: '<svg className="tweet__stats-svg tweet__stats-svg--fill" viewBox="0 0 24 24"><path d="M19 10.5V8.8h-4.4v6.4h1.7v-2h2v-1.7h-2v-1H19zm-7.3-1.7h1.7v6.4h-1.7V8.8zm-3.6 1.6c.4 0 .9.2 1.2.5l1.2-1C9.9 9.2 9 8.8 8.1 8.8c-1.8 0-3.2 1.4-3.2 3.2s1.4 3.2 3.2 3.2c1 0 1.8-.4 2.4-1.1v-2.5H7.7v1.2h1.2v.6c-.2.1-.5.2-.8.2-.9 0-1.6-.7-1.6-1.6 0-.8.7-1.6 1.6-1.6z" /><path d="M20.5 2.02h-17c-1.24 0-2.25 1.007-2.25 2.247v15.507c0 1.238 1.01 2.246 2.25 2.246h17c1.24 0 2.25-1.008 2.25-2.246V4.267c0-1.24-1.01-2.247-2.25-2.247zm.75 17.754c0 .41-.336.746-.75.746h-17c-.414 0-.75-.336-.75-.746V4.267c0-.412.336-.747.75-.747h17c.414 0 .75.335.75.747v15.507z" /></svg>',
            href: '#placeholder'
        },
        {
            id: uuidv4(),
            svg: '<svg className="tweet__stats-svg tweet__stats-svg--fill" viewBox="0 0 24 24"><path d="M20.222 9.16h-1.334c.015-.09.028-.182.028-.277V6.57c0-.98-.797-1.777-1.778-1.777H3.5V3.358c0-.414-.336-.75-.75-.75s-.75.336-.75.75V20.83c0 .415.336.75.75.75s.75-.335.75-.75v-1.434h10.556c.98 0 1.778-.797 1.778-1.777v-2.313c0-.095-.014-.187-.028-.278h4.417c.98 0 1.778-.798 1.778-1.778v-2.31c0-.983-.797-1.78-1.778-1.78zM17.14 6.293c.152 0 .277.124.277.277v2.31c0 .154-.125.28-.278.28H3.5V6.29h13.64zm-2.807 9.014v2.312c0 .153-.125.277-.278.277H3.5v-2.868h10.556c.153 0 .277.126.277.28zM20.5 13.25c0 .153-.125.277-.278.277H3.5V10.66h16.722c.153 0 .278.124.278.277v2.313z" /></svg>',
            href: '#placeholder'
        },
        {
            id: uuidv4(),
            svg: '<svg className="tweet__stats-svg tweet__stats-svg--fill" viewBox="0 0 24 24"><path d="M-37.9 18c-.1-.1-.1-.1-.1-.2.1 0 .1.1.1.2z" /><path d="M-37.9 18c-.1-.1-.1-.1-.1-.2.1 0 .1.1.1.2zM18 2.2h-1.3v-.3c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v.3H7.7v-.3c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v.3H4.8c-1.4 0-2.5 1.1-2.5 2.5v13.1c0 1.4 1.1 2.5 2.5 2.5h2.9c.4 0 .8-.3.8-.8 0-.4-.3-.8-.8-.8H4.8c-.6 0-1-.5-1-1V7.9c0-.3.4-.7 1-.7H18c.6 0 1 .4 1 .7v1.8c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-5c-.1-1.4-1.2-2.5-2.6-2.5zm1 3.7c-.3-.1-.7-.2-1-.2H4.8c-.4 0-.7.1-1 .2V4.7c0-.6.5-1 1-1h1.3v.5c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-.5h7.5v.5c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-.5H18c.6 0 1 .5 1 1v1.2z" /><path d="M15.5 10.4c-3.4 0-6.2 2.8-6.2 6.2 0 3.4 2.8 6.2 6.2 6.2 3.4 0 6.2-2.8 6.2-6.2 0-3.4-2.8-6.2-6.2-6.2zm0 11c-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7 4.7 2.1 4.7 4.7c0 2.5-2.1 4.7-4.7 4.7z" /><path d="M18.9 18.7c-.1.2-.4.4-.6.4-.1 0-.3 0-.4-.1l-3.1-2v-3c0-.4.3-.8.8-.8.4 0 .8.3.8.8v2.2l2.4 1.5c.2.2.3.6.1 1z" /></svg>',
            href: '#placeholder'
        },
    ],
    tabProfile: [
        {
            id: uuidv4(),
            text: 'tweets',
            link: '#placeholder'
        },
        {
            id: uuidv4(),
            text: 'tweets y respuestas',
            link: '#placeholder'
        },
        {
            id: uuidv4(),
            text: 'fotos y vídeos',
            link: '#placeholder'
        },
        {
            id: uuidv4(),
            text: 'me gusta',
            link: '#placeholder'
        },
    ],
    tabExplore: [
        {
            id: uuidv4(),
            text: 'para ti',
            link: '#placeholder'
        },
        {
            id: uuidv4(),
            text: 'tendencias',
            link: '#placeholder'
        },
        {
            id: uuidv4(),
            text: 'noticias',
            link: '#placeholder'
        },
        {
            id: uuidv4(),
            text: 'deportes',
            link: '#placeholder'
        },
        {
            id: uuidv4(),
            text: 'entretenimiento',
            link: '#placeholder'
        },
      
    ],
    tabNotifications: [
        {
            id: uuidv4(),
            text: 'todo',
            link: '#placeholder'
        },
        {
            id: uuidv4(),
            text: 'menciones',
            link: '#placeholder'
        },
      
    ]
}

const User = {

    id: '@carolinehm',
    name: 'Caroline Holman',
    avatar: userAvatar,
    following: 812,
    followers: 189,
    
    messages: [
        {
            id: '@andyhr',
            name: 'Andrea Hernandez',
            avatar: messagesImage1,
            date: '25 sept.',
            content: 'Hi there!'
        },
        {
            id: '@lbledsoe',
            name: 'L. B. Bledsoe',
            avatar: messagesImage2,
            date: '24 sept.',
            content: 'I\'m ready!'
        },
        {
            id: '@jason80',
            name: 'Jason S. Santo',
            avatar: messagesImage3,
            date: '22 sept.',
            content: 'Hi, I have received the payment!'
        },
        {
            id: '@rawalls',
            name: 'Rosa A. Walls',
            avatar: messagesImage4,
            date: '18 sept.',
            content: 'Send me your profile'
        },
        {
            id: '@marj',
            name: 'Marlene J.',
            avatar: messagesImage5,
            date: '18 sept.',
            content: 'Great let me know via email.'
        },
        {
            id: '@kava90',
            name: 'Carol Kavanaugh',
            avatar: messagesImage6,
            date: '12 sept.',
            content: '¡Toma todo mi dinero!'
        },
        {
            id: '@brooksrichard',
            name: 'Richard Brooks',
            avatar: messagesImage7,
            date: '25 sept.',
            content: 'Thanks you so much!'
        },
        {
            id: '@ana12893',
            name: 'Ana Roho',
            avatar: messagesImage8,
            date: '06 sept.',
            content: 'The Detroit Pistons announced today that the team has converted center Luka Garza’s two-way contract to a standard NBA contract.'
        },

        {
            id: '@nagy90',
            name: 'Elwood J. Nagy',
            avatar: messagesImage9,
            date: '02 sept.',
            content: 'NFL informed suspended former All-Pro WR Josh Gordon that it is reinstating him, sources tell ESPN.'
        },
        {
            id: '@rcooper',
            name: 'Rosalie J. Cooper',
            avatar: messagesImage10,
            date: '01 sept.',
            content: 'Hi there!'
        },
        {
            id: '@sanderscs',
            name: 'Crystal S. Sanders',
            avatar: messagesImage11,
            date: '28 ago.',
            content: 'The Wake Forest football team look to continue an undefeated run as they take on the Virginia Cavaliers'
        },
        {
            id: '@marbrown',
            name: 'Marcia J. Brown',
            avatar: messagesImage12,
            date: '25 ago.',
            content: 'Hurricane forecasters aren’t tweeting about your personal life, they swear'
        },

        {
            id: '@andrew16783',
            name: 'Andrew D. Hensley',
            avatar: messagesImage13,
            date: '14 ago.',
            content: 'A Salt Lake City news reporter didn\'t realize that she was interviewing Jordan Clarkson until later.'
        },
        {
            id: '@mill13j',
            name: 'Millie J.',
            avatar: messagesImage14,
            date: '02 ago.',
            content: 'No soy el mejor jugador del mundo. KD, LeBron, Kawhi, Luka, Curry o AD podrían serlo. Todavía estoy cazando a los grandes de todos los tiempos. LeBron sigue siendo el mejor jugador del mundo'
        },
        {
            id: '@decostalj',
            name: 'James L. Decosta',
            avatar: messagesImage15,
            date: '28 jul.',
            content: 'Hi there!'
        },
     
    ],
    contentProfile: [
        [
            {
                id: uuidv4(),
                user: {
                    id: '@carolinehm',
                    name: 'Caroline Holman',
                    avatar: userAvatar,
                    timestamp: '20s',
                },
                tweet: {
                    description: 'There are many variations of passages of Lorem Ipsum available, or random randomised words which don\'t look even slightly believable.',
                    tags: ['@rwalls', '@kava90'],
                    hashtags: ['gamer','streamer','girl'],
                    attachment: [tweetAttachment2a],
                    type: '',
                    stats: {
                        comments: 12,
                        retweets: 10,
                        likes: 125,
                        liked: true
                    }
                }
            },
            {
                id: uuidv4(),
                user: {
                    id: '@carolinehm',
                    name: 'Caroline Holman',
                    avatar: userAvatar,
                    timestamp: '20s',
                },
                tweet: {
                    description: 'There are many variations of passages of Lorem Ipsum available, or random randomised words which don\'t look even slightly believable.',
                    tags: ['@rwalls', '@kava90'],
                    hashtags: ['gamer','streamer','girl'],
                    attachment: [tweetAttachment2b],
                    type: '',
                    stats: {
                        comments: 2,
                        retweets: 10,
                        likes: 69,
                        liked: false
                    }
                }
            },
            {
                id: uuidv4(),
                user: {
                    id: '@carolinehm',
                    name: 'Caroline Holman',
                    avatar: userAvatar,
                    timestamp: '20s',
                },
                tweet: {
                    description: 'There are many variations of passages of Lorem Ipsum available, or random randomised words which don\'t look even slightly believable.',
                    tags: ['@rwalls', '@kava90'],
                    hashtags: ['gamer','streamer','girl'],
                    attachment: [tweetAttachment1],
                    type: '',
                    stats: {
                        comments: 18,
                        retweets: 23,
                        likes: 159,
                        liked: true
                    }
                }
            },
            {
                id: uuidv4(),
                user: {
                    id: '@carolinehm',
                    name: 'Caroline Holman',
                    avatar: userAvatar,
                    timestamp: '20s',
                },
                tweet: {
                    description: 'There are many variations of passages of Lorem Ipsum available, or random randomised words which don\'t look even slightly believable.',
                    tags: ['@rwalls', '@kava90'],
                    hashtags: ['gamer','streamer','girl'],
                    attachment: [tweetAttachment8a],
                    type: '',
                    stats: {
                        comments: 7,
                        retweets: 2,
                        likes: 19,
                        liked: false
                    }
                }
            },
            
        ],
        [
            {
                id: uuidv4(),
                user: {
                    id: '@jason80',
                    name: 'Jason S. Santo',
                    avatar: timelineAvatar3,
                    timestamp: '20s',
                },
                tweet: {
                    description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.',
                    tags: [],
                    hashtags: ['moto','speed','awesome','incredible'],
                    attachment: [tweetAttachment3a],
                    type: '',
                    stats: {
                        comments: 12,
                        retweets: 40,
                        likes: 85,
                        liked: true
                    }
                }
            },
            {
                id: uuidv4(),
                user: {
                    id: '@ana12893',
                    name: 'Ana Roho',
                    avatar: timelineAvatar8,
                    timestamp: '20s',
                },
                tweet: {
                    description: 'There are many variations of passages of Lorem Ipsum available, or random randomised words which don\'t look even slightly believable.',
                    tags: ['@rwalls', '@kava90'],
                    hashtags: ['gamer','streamer','girl'],
                    attachment: [tweetAttachment8a],
                    type: '',
                    stats: {
                        comments: 12,
                        retweets: 10,
                        likes: 125,
                        liked: false
                    }
                }
            }, 
            {
                id: uuidv4(),
                user: {
                    id: '@carolinehm',
                    name: 'Caroline Holman',
                    avatar: userAvatar,
                    timestamp: '20s',
                },
                tweet: {
                    description: 'There are many variations of passages of Lorem Ipsum available, or random randomised words which don\'t look even slightly believable.',
                    tags: ['@rwalls', '@kava90'],
                    hashtags: ['gamer','streamer','girl'],
                    attachment: [tweetAttachment6],
                    type: '',
                    stats: {
                        comments: 4,
                        retweets: 10,
                        likes: 55,
                        liked: false
                    }
                }
            },
        ],
        [
            {
                id: uuidv4(),
                user: {
                    id: '@carolinehm',
                    name: 'Caroline Holman',
                    avatar: userAvatar,
                    timestamp: '20s',
                },
                tweet: {
                    description: 'There are many variations of passages of Lorem Ipsum available, or random randomised words which don\'t look even slightly believable.',
                    tags: ['@rwalls', '@kava90'],
                    hashtags: ['gamer','streamer','girl'],
                    attachment: [tweetAttachment4],
                    type: '',
                    stats: {
                        comments: 2,
                        retweets: 8,
                        likes: 105,
                        liked: true
                    }
                }
            },
            {
                id: uuidv4(),
                user: {
                    id: '@carolinehm',
                    name: 'Caroline Holman',
                    avatar: userAvatar,
                    timestamp: '20s',
                },
                tweet: {
                    description: 'There are many variations of passages of Lorem Ipsum available, or random randomised words which don\'t look even slightly believable.',
                    tags: ['@rwalls', '@kava90'],
                    hashtags: ['gamer','streamer','girl'],
                    attachment: [tweetAttachment5],
                    type: '',
                    stats: {
                        comments: 18,
                        retweets: 20,
                        likes: 155,
                        liked: false
                    }
                }
            },
            {
                id: uuidv4(),
                user: {
                    id: '@carolinehm',
                    name: 'Caroline Holman',
                    avatar: userAvatar,
                    timestamp: '20s',
                },
                tweet: {
                    description: 'There are many variations of passages of Lorem Ipsum available, or random randomised words which don\'t look even slightly believable.',
                    tags: ['@rwalls', '@kava90'],
                    hashtags: ['gamer','streamer','girl'],
                    attachment: [tweetAttachment6],
                    type: '',
                    stats: {
                        comments: 4,
                        retweets: 10,
                        likes: 55,
                        liked: true
                    }
                }
            },
        ],
        [
            {
                id: uuidv4(),
                user: {
                    id: '@lbledsoe',
                    name: 'L. B. Bledsoe',
                    avatar: timelineAvatar2,
                    timestamp: '20s',
                },
                tweet: {
                    description: 'It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks #reasonable,but the majority have suffered #alteration in some form, by injected humour, or random randomised words which don\'t look even slightly believable.',
                    tags: ['#photo'],
                    hashtags: ['light','photo','blur','night'],
                    attachment: [tweetAttachment2a,tweetAttachment2b],
                    type: 'tweet__attachment--two',
                    stats: {
                        comments: 3,
                        retweets: 6,
                        likes: 34,
                        liked: true
                    }
                }
            }, 
            {
                id: uuidv4(),
                user: {
                    id: '@jason80',
                    name: 'Jason S. Santo',
                    avatar: timelineAvatar3,
                    timestamp: '20s',
                },
                tweet: {
                    description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.',
                    tags: [],
                    hashtags: ['moto','speed','awesome','incredible'],
                    attachment: [tweetAttachment3a],
                    type: '',
                    stats: {
                        comments: 12,
                        retweets: 40,
                        likes: 85,
                        liked: true
                    }
                }
            },
            {
                id: uuidv4(),
                user: {
                    id: '@carolinehm',
                    name: 'Caroline Holman',
                    avatar: userAvatar,
                    timestamp: '20s',
                },
                tweet: {
                    description: 'There are many variations of passages of Lorem Ipsum available, or random randomised words which don\'t look even slightly believable.',
                    tags: ['@rwalls', '@kava90'],
                    hashtags: ['gamer','streamer','girl'],
                    attachment: [tweetAttachment6],
                    type: '',
                    stats: {
                        comments: 4,
                        retweets: 10,
                        likes: 55,
                        liked: true
                    }
                }
            },
        ],
        [
            {
                id: uuidv4(),
                user: {
                    id: '@carolinehm',
                    name: 'Caroline Holman',
                    avatar: timelineAvatar1,
                    timestamp: '20s',
                },
                tweet: {
                    description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
                    tags: ['@sanderson', '@gmedina'],
                    hashtags: ['selfie','photo','girl','portrait','landscape'],
                    attachment: [tweetAttachment1],
                    type: '',
                    stats: {
                        comments: 3,
                        retweets: 10,
                        likes: 45,
                        liked: true
                    }
                }
            }, 
            {
                id: uuidv4(),
                user: {
                    id: '@lbledsoe',
                    name: 'L. B. Bledsoe',
                    avatar: timelineAvatar2,
                    timestamp: '20s',
                },
                tweet: {
                    description: 'It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks #reasonable,but the majority have suffered #alteration in some form, by injected humour, or random randomised words which don\'t look even slightly believable.',
                    tags: ['#photo'],
                    hashtags: ['light','photo','blur','night'],
                    attachment: [tweetAttachment2a,tweetAttachment2b],
                    type: 'tweet__attachment--two',
                    stats: {
                        comments: 3,
                        retweets: 6,
                        likes: 34,
                        liked: false
                    }
                }
            }, 
            {
                id: uuidv4(),
                user: {
                    id: '@jason80',
                    name: 'Jason S. Santo',
                    avatar: timelineAvatar3,
                    timestamp: '20s',
                },
                tweet: {
                    description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.',
                    tags: [],
                    hashtags: ['moto','speed','awesome','incredible'],
                    attachment: [tweetAttachment3a],
                    type: '',
                    stats: {
                        comments: 12,
                        retweets: 40,
                        likes: 85,
                        liked: true
                    }
                }
            },
            {
                id: uuidv4(),
                user: {
                    id: '@ana12893',
                    name: 'Ana Roho',
                    avatar: timelineAvatar8,
                    timestamp: '20s',
                },
                tweet: {
                    description: 'There are many variations of passages of Lorem Ipsum available, or random randomised words which don\'t look even slightly believable.',
                    tags: ['@rwalls', '@kava90'],
                    hashtags: ['gamer','streamer','girl'],
                    attachment: [tweetAttachment8a],
                    type: '',
                    stats: {
                        comments: 12,
                        retweets: 10,
                        likes: 125,
                        liked: false
                    }
                }
            }, 
        ]
    ],

    contentExplore: [
        [
            { 
                id: uuidv4(),
                hero: trendingImage1,
                mainTopic: 'Covid-19',
                mainNews: 'COVID-19 actualizaciones para EE.UU.'
            },
            {
                id: uuidv4(),
                card: true,
                topic: 'COVID 19',
                title: 'La periodista ciudadana china Zhang Zhan es encarcelada por informar sobre los inicios del brote de COVID-19 en Wuhan',
                number: '25 mil Tweets',
                img: exploreImage1,
            },
            {
                id: uuidv4(),
                card: true,
                topic: 'Política',
                title: 'Mitch McConnell',
                number: 'Tendencias sobre <span className="sidebar__ht">Bernie</span>, <span className="sidebar__ht">Senate</span>',
                img: exploreImage2,
            },
            {
                id: uuidv4(),
                card: true,
                topic: 'Toronto Start',
                title: 'Schitt Creek character strikes debate on faking accents, stereotypes',
                number: '116 mil Tweets',
                img: exploreImage3,
            },
            {
                id: uuidv4(),
                card: true,
                topic: 'Fútbol',
                title: 'Gareth Bale',
                number: '2,281 Tweets',
                img: exploreImage4,
            },
            {
                id: uuidv4(),
                card: true,
                topic: 'Entretenimiento',
                title: 'El diseñador de moda Pierre Cardin murió a los 98 años',
                number: '5 mil Tweets',
                img: exploreImage5,
            },
            {
                id: uuidv4(),
                card: true,
                topic: 'Noticias Mundiales',
                title: 'Alemania acude a las urnas para definir el sucesor de Merkel',
                number: '12 mil Tweets',
                img: exploreImage8,
            },
            {
                id: uuidv4(),
                card: true,
                topic: 'Noticias Mundiales',
                title: 'Teens around the world take part in global protest Fridays for Future',
                number: '7 mil Tweets',
                img: exploreImage9,
            }  
        ],
        [
            {
                id: uuidv4(),
                hero: trendingImage2,
                mainTopic: 'Usyk',
                mainNews: 'Oleksandr Usyk becomes the unified heavyweight champion after defeating Anthony Joshua.'
            },
            {
                id: uuidv4(),
                card: true,
                topic: 'NFL',
                title: 'Hollywood Brown',
                number: '5 mil Tweets',
                img: exploreImage6,
            },
            {
                id: uuidv4(),
                card: true,
                topic: 'NFL',
                title: 'Colts',
                number: '2 mil Tweets',
                img: exploreImage7,
            },
            {
                id: uuidv4(),
                card: true,
                topic: 'Noticias Mundiales',
                title: 'Alemania acude a las urnas para definir el sucesor de Merkel',
                number: '12 mil Tweets',
                img: exploreImage8,
            },
            {
                id: uuidv4(),
                card: true,
                topic: 'Noticias Mundiales',
                title: 'Teens around the world take part in global protest Fridays for Future',
                number: '7 mil Tweets',
                img: exploreImage9,
            }             
        ],
        [
            {
                id: uuidv4(),
                hero: trendingImage3,
                mainTopic: 'Noticias Mundiales',
                mainNews: 'China has released two Canadians who were detained on spying charges'
            },
            {
                id: uuidv4(),
                card: true,
                topic: 'Clima',
                title: 'Fawn Fire triggers evacuations in Northern California',
                number: '6 mil Tweets',
                img: exploreImage10,
            },
            {
                id: uuidv4(),
                card: true,
                topic: 'Noticias',
                title: 'Jury begins deliberations in federal trial of R. Kelly',
                number: '10 mil Tweets',
                img: exploreImage11,
            },
            {
                id: uuidv4(),
                card: true,
                topic: 'Noticias',
                title: 'How to prepare for, prevent and respond to wildfires',
                number: '10 mil Tweets',
                img: exploreImage12,
            },
            {
                id: uuidv4(),
                card: true,
                topic: 'Covid',
                title: 'Científicos y expertos explican que las vacunas son seguras para la mayoría de la población',
                number: '20 mil Tweets',
                img: exploreImage13,
            },
            {
                id: uuidv4(),
                card: true,
                topic: 'Covid',
                title: 'Ensayos demuestran que vacunas COVID-19 disminuyen la gravedad de la enfermedad y su mortalidad',
                number: '20 mil Tweets',
                img: exploreImage14,
            },
            {
                id: uuidv4(),
                card: true,
                topic: 'Noticias Mundiales',
                title: 'Asamblea General de la ONU: líderes debaten en Nueva York',
                number: '20 mil Tweets',
                img: exploreImage15,
            } 
        ],
        [
            {
                id: uuidv4(),
                hero: trendingImage4,
                mainTopic: 'Esta Mañana',
                mainNews: 'Melbourne Demons win the 2021 AFL premiership '
            },
            {
                id: uuidv4(),
                card: true,
                topic: 'Toronto Start',
                title: 'Schitt Creek character strikes debate on faking accents, stereotypes',
                number: '116 mil Tweets',
                img: exploreImage3,
            },
            {
                id: uuidv4(),
                card: true,
                topic: 'Fútbol',
                title: 'Gareth Bale',
                number: '2,281 Tweets',
                img: exploreImage4,
            },
            {
                id: uuidv4(),
                card: true,
                topic: 'Entretenimiento',
                title: 'El diseñador de moda Pierre Cardin murió a los 98 años',
                number: '5 mil Tweets',
                img: exploreImage5,
            },
            {
                id: uuidv4(),
                card: true,
                topic: 'Clima',
                title: 'Fawn Fire triggers evacuations in Northern California',
                number: '6 mil Tweets',
                img: exploreImage10,
            },
            {
                id: uuidv4(),
                card: true,
                topic: 'Noticias',
                title: 'Jury begins deliberations in federal trial of R. Kelly',
                number: '10 mil Tweets',
                img: exploreImage11,
            },
            {
                id: uuidv4(),
                card: true,
                topic: 'Noticias',
                title: 'How to prepare for, prevent and respond to wildfires',
                number: '10 mil Tweets',
                img: exploreImage12,
            },
        ],
        [
            {
                id: uuidv4(),
                hero: trendingImage5,
                mainTopic: 'Anoche',
                mainNews: 'Overwatch League Playoffs 2021'
            },
            {
                id: uuidv4(),
                card: true,
                topic: 'Entretenimiento',
                title: 'El diseñador de moda Pierre Cardin murió a los 98 años',
                number: '5 mil Tweets',
                img: exploreImage5,
            },
            {
                id: uuidv4(),
                card: true,
                topic: 'Noticias Mundiales',
                title: 'Alemania acude a las urnas para definir el sucesor de Merkel',
                number: '12 mil Tweets',
                img: exploreImage8,
            },
            {
                id: uuidv4(),
                card: true,
                topic: 'Fútbol',
                title: 'Gareth Bale',
                number: '2,281 Tweets',
                img: exploreImage4,
            },
            {
                id: uuidv4(),
                card: true,
                topic: 'Noticias Mundiales',
                title: 'Teens around the world take part in global protest Fridays for Future',
                number: '7 mil Tweets',
                img: exploreImage9,
            }  
         
        ]
    ],

    gallery: [
        galleryImage1,
        galleryImage2,
        galleryImage3,
        galleryImage4,
        galleryImage5,
        galleryImage6
    ],
    
    contentMentions: [
        [
            {
                id: uuidv4(),
                user: '@andyhr',
                name: 'Andrea Hernandez <span>y 2 más indicarón que les gusta tu respuesta</span>',
                avatar: [messagesImage1, messagesImage2, messagesImage3],
                description: 'awesome work! I love it!',
                svg: '<svg className="mentions__icon mentions__icon--like" viewBox="0 0 24 24"><g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z"/></g></svg>'
            },
            {
                id: uuidv4(),
                user: '@lbledsoe',
                name: 'L. B. Bledsoe <span>indicó que le gusta tu respuesta</span>',
                avatar: [messagesImage2],
                description: 'I don\'t know, but I like the first one',
                svg: '<svg className="mentions__icon mentions__icon--like" viewBox="0 0 24 24"><g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z"/></g></svg>'
            },
            {
                id: uuidv4(),
                user: '@jason80',
                name: 'Jason S. Santo <span>te siguió</span>',
                avatar: [messagesImage3],
                description: '',
                svg: '<svg className="mentions__icon mentions__icon--follow" viewBox="0 0 24 24"><g><path d="M12.225 12.165c-1.356 0-2.872-.15-3.84-1.256-.814-.93-1.077-2.368-.805-4.392.38-2.826 2.116-4.513 4.646-4.513s4.267 1.687 4.646 4.513c.272 2.024.008 3.46-.806 4.392-.97 1.106-2.485 1.255-3.84 1.255zm5.849 9.85H6.376c-.663 0-1.25-.28-1.65-.786-.422-.534-.576-1.27-.41-1.968.834-3.53 4.086-5.997 7.908-5.997s7.074 2.466 7.91 5.997c.164.698.01 1.434-.412 1.967-.4.505-.985.785-1.648.785z"/></g></svg>'
            },
            {
                id: uuidv4(),
                user: '@rawalls',
                name: 'Rosa A. Walls <span>indicó que le gusta tu respuesta</span>',
                avatar: [messagesImage4],
                description: 'awesome work! I love it!',
                svg: '<svg className="mentions__icon mentions__icon--like" viewBox="0 0 24 24"><g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z"/></g></svg>'
            },
            {
                id: uuidv4(),
                user: '@marj',
                name: 'Marlene J. Santo <span>te siguió</span>',
                avatar: [messagesImage5],
                description: '',
                svg: '<svg className="mentions__icon mentions__icon--follow" viewBox="0 0 24 24"><g><path d="M12.225 12.165c-1.356 0-2.872-.15-3.84-1.256-.814-.93-1.077-2.368-.805-4.392.38-2.826 2.116-4.513 4.646-4.513s4.267 1.687 4.646 4.513c.272 2.024.008 3.46-.806 4.392-.97 1.106-2.485 1.255-3.84 1.255zm5.849 9.85H6.376c-.663 0-1.25-.28-1.65-.786-.422-.534-.576-1.27-.41-1.968.834-3.53 4.086-5.997 7.908-5.997s7.074 2.466 7.91 5.997c.164.698.01 1.434-.412 1.967-.4.505-.985.785-1.648.785z"/></g></svg>'
            },
            {
                id: uuidv4(),
                user: '@kava90',
                name: 'Carol Kavanaugh <span>indicó que le gusta tu respuesta</span>',
                avatar: [messagesImage6],
                description: 'Hey I needed help in something!',
                svg: '<svg className="mentions__icon mentions__icon--like" viewBox="0 0 24 24"><g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z"/></g></svg>'
            },
            {
                id: uuidv4(),
                user: '@marbrown',
                name: 'Marcia J. Brown',
                avatar: [messagesImage12],
                description: 'Hey I needed help in something!',
                svg: '<svg className="mentions__icon mentions__icon--like" viewBox="0 0 24 24"><g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z"/></g></svg>'
            },
            {
                id: uuidv4(),
                user: '@andrew16783',
                name: 'Andrew D. Hensley',
                avatar: [messagesImage13],
                description: 'Hey gracias!',
                svg: '<svg className="mentions__icon mentions__icon--like" viewBox="0 0 24 24"><g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z"/></g></svg>'
            },
            {
                id: uuidv4(),
                user: '@mill13j',
                name: 'Millie J.',
                avatar: [messagesImage14],
                description: 'Nuevo récord Guinness: la pizza con más tipos de queso del mundo',
                svg: '<svg className="mentions__icon mentions__icon--like" viewBox="0 0 24 24"><g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z"/></g></svg>'
            },
           
        ],
        [
            {
                id: uuidv4(),
                user: '@ana12893',
                name: 'Ana Roho <span>indicó que le gusta tu respuesta</span>',
                avatar: [messagesImage8]  ,
                description: ' really appreciate the mention mate.',
                svg: '<svg className="mentions__icon mentions__icon--like" viewBox="0 0 24 24"><g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z"/></g></svg>',
                stats: {
                    comments: 30,
                    retweets: 45,
                    likes: 104,
                    liked: 'disabled'
                }
            },
            {
                id: uuidv4(),
                user: '@marj',
                name: 'Marlene J. <span>y 4 más indicarón que les gusta tu respuesta</span>',
                avatar: [messagesImage5, messagesImage4, messagesImage3, messagesImage8],
                description: 'This is really nice!',
                svg: '<svg className="mentions__icon mentions__icon--like" viewBox="0 0 24 24"><g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z"/></g></svg>',
                stats: {
                    comments: 56,
                    retweets: 67,
                    likes: 306,
                    liked: 'disabled'
                }
            },
            {
                id: uuidv4(),
                user: '@marbrown',
                name: 'Marcia J. Brown',
                avatar: [messagesImage12],
                description: 'Hey I needed help in something!',
                svg: '<svg className="mentions__icon mentions__icon--like" viewBox="0 0 24 24"><g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z"/></g></svg>',
                stats: {
                    comments: 3,
                    retweets: 2,
                    likes: 14,
                    liked: 'disabled'
                }
            },
            {
                id: uuidv4(),
                user: '@andrew16783',
                name: 'Andrew D. Hensley',
                avatar: [messagesImage13],
                description: 'Hey gracias!',
                svg: '<svg className="mentions__icon mentions__icon--like" viewBox="0 0 24 24"><g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z"/></g></svg>',
                stats: {
                    comments: 8,
                    retweets: 2,
                    likes: 56,
                    liked: 'disabled'
                }
            },
            {
                id: uuidv4(),
                user: '@mill13j',
                name: 'Millie J.',
                avatar: [messagesImage14],
                description: 'Nuevo récord Guinness: la pizza con más tipos de queso del mundo',
                svg: '<svg className="mentions__icon mentions__icon--like" viewBox="0 0 24 24"><g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z"/></g></svg>',
                stats: {
                    comments: 12,
                    retweets: 34,
                    likes: 200,
                    liked: 'disabled'
                }
            },
            {
                id: uuidv4(),
                user: '@rawalls',
                name: 'Rosa A. Walls <span>indicó que le gusta tu respuesta</span>',
                avatar: [messagesImage4],
                description: 'awesome work! I love it!',
                svg: '<svg className="mentions__icon mentions__icon--like" viewBox="0 0 24 24"><g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z"/></g></svg>',
                stats: {
                    comments: 13,
                    retweets: 16,
                    likes: 134,
                    liked: 'disabled'
                }
            },
        ]
    ],

    menuOpen: false,
}

export { UI, User }