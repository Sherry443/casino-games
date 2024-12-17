import React from 'react'
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top pt-0 small_screen_nav">
                <div className="container ">
                    <Link className="navbar-brand fw-bold logo_color" to="/">
                        <svg width="118" height="53" viewBox="0 0 118 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="26" width="117" height="27" fill="white" />
                            <path d="M10.9849 25.72H6.6249C4.51824 25.72 2.89157 25.16 1.7449 24.04C0.598236 22.92 0.0249023 21.3067 0.0249023 19.2V6.52C0.0249023 4.41333 0.598236 2.8 1.7449 1.68C2.89157 0.56 4.51824 0 6.6249 0H10.9849C13.0649 0 14.6782 0.573333 15.8249 1.72C16.9982 2.84 17.5849 4.44 17.5849 6.52V8.4C17.5849 8.98667 17.2916 9.28 16.7049 9.28H13.3449C12.7849 9.28 12.5049 8.98667 12.5049 8.4V6.76C12.5049 5.90667 12.3182 5.30666 11.9449 4.96C11.5982 4.58666 10.9982 4.4 10.1449 4.4H7.4249C6.59824 4.4 5.99824 4.58666 5.6249 4.96C5.27824 5.30666 5.1049 5.90667 5.1049 6.76V18.96C5.1049 19.8133 5.27824 20.4267 5.6249 20.8C5.99824 21.1467 6.59824 21.32 7.4249 21.32H10.1449C10.9982 21.32 11.5982 21.1467 11.9449 20.8C12.3182 20.4267 12.5049 19.8133 12.5049 18.96V17.32C12.5049 16.7333 12.7849 16.44 13.3449 16.44H16.7049C17.2916 16.44 17.5849 16.7333 17.5849 17.32V19.2C17.5849 21.28 16.9982 22.8933 15.8249 24.04C14.6782 25.16 13.0649 25.72 10.9849 25.72Z" fill="#E00000" />
                            <path d="M24.6283 25.72H20.7883C20.3083 25.72 20.1483 25.44 20.3083 24.88L26.6283 0.839999C26.815 0.28 27.215 0 27.8283 0H33.1483C33.815 0 34.215 0.28 34.3483 0.839999L40.6683 24.88C40.8283 25.44 40.6683 25.72 40.1883 25.72H36.3483C36.055 25.72 35.855 25.6667 35.7483 25.56C35.6417 25.4267 35.5617 25.2 35.5083 24.88L34.3883 20.48H26.5883L25.4683 24.88C25.415 25.2 25.3217 25.4267 25.1883 25.56C25.0817 25.6667 24.895 25.72 24.6283 25.72ZM30.4283 4.84L27.5483 16.4H33.4683L30.5883 4.84H30.4283Z" fill="#E00000" />
                            <path d="M43.574 19.16V18.36C43.574 17.8 43.854 17.52 44.414 17.52H47.814C48.374 17.52 48.654 17.8 48.654 18.36V18.68C48.654 19.6933 48.854 20.3867 49.254 20.76C49.654 21.1333 50.3873 21.32 51.454 21.32H53.334C54.374 21.32 55.094 21.12 55.494 20.72C55.9206 20.32 56.134 19.5733 56.134 18.48V18C56.134 17.2267 55.814 16.64 55.174 16.24C54.5606 15.8133 53.7873 15.56 52.854 15.48C51.9206 15.4 50.9073 15.2533 49.814 15.04C48.7473 14.8 47.7473 14.5067 46.814 14.16C45.8806 13.7867 45.094 13.08 44.454 12.04C43.8406 10.9733 43.534 9.61333 43.534 7.96V6.56C43.534 4.48 44.1206 2.86667 45.294 1.72C46.4673 0.573333 48.094 0 50.174 0H54.174C56.2806 0 57.9206 0.573333 59.094 1.72C60.2673 2.86667 60.854 4.48 60.854 6.56V7.32C60.854 7.88 60.574 8.16 60.014 8.16H56.614C56.054 8.16 55.774 7.88 55.774 7.32V7.08C55.774 6.04 55.574 5.33333 55.174 4.96C54.774 4.58666 54.0406 4.4 52.974 4.4H51.414C50.3206 4.4 49.574 4.61333 49.174 5.04C48.8006 5.44 48.614 6.24 48.614 7.44V8.2C48.614 9.45333 49.7073 10.1733 51.894 10.36C54.1606 10.5467 56.174 11 57.934 11.72C58.8673 12.12 59.6406 12.84 60.254 13.88C60.894 14.8933 61.214 16.2 61.214 17.8V19.16C61.214 21.24 60.6273 22.8533 59.454 24C58.2806 25.1467 56.654 25.72 54.574 25.72H50.214C48.134 25.72 46.5073 25.1467 45.334 24C44.1606 22.8533 43.574 21.24 43.574 19.16Z" fill="#E00000" />
                            <path d="M71.0565 0.839999V24.88C71.0565 25.44 70.7765 25.72 70.2165 25.72H66.8165C66.2565 25.72 65.9765 25.44 65.9765 24.88V0.839999C65.9765 0.28 66.2565 0 66.8165 0H70.2165C70.7765 0 71.0565 0.28 71.0565 0.839999Z" fill="#E00000" />
                            <path d="M80.6005 25.72H77.2805C76.7205 25.72 76.4405 25.44 76.4405 24.88V0.839999C76.4405 0.28 76.7205 0 77.2805 0H80.2805C80.8405 0 81.2139 0.186667 81.4005 0.56L89.4805 15.72H89.6405V0.839999C89.6405 0.28 89.9205 0 90.4805 0H93.8005C94.3605 0 94.6405 0.28 94.6405 0.839999V24.88C94.6405 25.44 94.3605 25.72 93.8005 25.72H90.8805C90.2939 25.72 89.8672 25.4533 89.6005 24.92L81.6005 10.04H81.4405V24.88C81.4405 25.44 81.1605 25.72 80.6005 25.72Z" fill="#E00000" />
                            <path d="M106.839 21.32H109.679C110.532 21.32 111.132 21.1467 111.479 20.8C111.852 20.4267 112.039 19.8133 112.039 18.96V6.76C112.039 5.90667 111.852 5.30666 111.479 4.96C111.132 4.58666 110.532 4.4 109.679 4.4H106.839C105.986 4.4 105.386 4.58666 105.039 4.96C104.692 5.30666 104.519 5.90667 104.519 6.76V18.96C104.519 19.8133 104.692 20.4267 105.039 20.8C105.386 21.1467 105.986 21.32 106.839 21.32ZM110.519 25.72H106.039C103.932 25.72 102.306 25.16 101.159 24.04C100.012 22.92 99.439 21.3067 99.439 19.2V6.52C99.439 4.41333 100.012 2.8 101.159 1.68C102.306 0.56 103.932 0 106.039 0H110.519C112.626 0 114.252 0.56 115.399 1.68C116.546 2.8 117.119 4.41333 117.119 6.52V19.2C117.119 21.3067 116.546 22.92 115.399 24.04C114.252 25.16 112.626 25.72 110.519 25.72Z" fill="#E00000" />
                            <mask id="path-3-outside-1_0_1163" maskUnits="userSpaceOnUse" x="4" y="30" width="109" height="22" fill="black">
                                <rect fill="white" x="4" y="30" width="109" height="22" />
                                <path d="M11.8563 47.5722H8.60858C7.49164 47.5722 6.60668 47.2457 5.9537 46.5928C5.3179 45.9399 5 45.0464 5 43.9124V34.6598C5 33.5258 5.3179 32.6323 5.9537 31.9794C6.60668 31.3265 7.49164 31 8.60858 31H11.8563C12.9732 31 13.8496 31.3265 14.4854 31.9794C15.1384 32.6323 15.4649 33.5258 15.4649 34.6598V35.9227C15.4649 36.1289 15.3704 36.232 15.1813 36.232H14.4596C14.2706 36.232 14.1761 36.1289 14.1761 35.9227V34.7113C14.1761 33.8866 13.9613 33.2594 13.5317 32.8299C13.1193 32.3832 12.5179 32.1598 11.7274 32.1598H8.71168C7.92123 32.1598 7.3198 32.3832 6.90739 32.8299C6.49498 33.2766 6.28878 33.9038 6.28878 34.7113V43.8608C6.28878 44.6684 6.49498 45.2955 6.90739 45.7423C7.3198 46.189 7.92123 46.4124 8.71168 46.4124H11.7274C12.5179 46.4124 13.1193 46.1976 13.5317 45.768C13.9613 45.3213 14.1761 44.6856 14.1761 43.8608V42.6495C14.1761 42.4433 14.2706 42.3402 14.4596 42.3402H15.1813C15.3704 42.3402 15.4649 42.4433 15.4649 42.6495V43.9124C15.4649 45.0464 15.1384 45.9399 14.4854 46.5928C13.8496 47.2457 12.9732 47.5722 11.8563 47.5722Z" />
                                <path d="M22.6818 46.4124H25.6202C26.4107 46.4124 27.0121 46.1976 27.4245 45.768C27.8541 45.3213 28.0689 44.6856 28.0689 43.8608V34.7113C28.0689 33.8866 27.8541 33.2594 27.4245 32.8299C27.0121 32.3832 26.4107 32.1598 25.6202 32.1598H22.6818C21.8914 32.1598 21.29 32.3832 20.8775 32.8299C20.4651 33.2766 20.2589 33.9038 20.2589 34.7113V43.8608C20.2589 44.6684 20.4651 45.2955 20.8775 45.7423C21.29 46.189 21.8914 46.4124 22.6818 46.4124ZM25.7491 47.5722H22.5787C21.4618 47.5722 20.5768 47.2457 19.9238 46.5928C19.2881 45.9399 18.9702 45.0464 18.9702 43.9124V34.6598C18.9702 33.5258 19.2881 32.6323 19.9238 31.9794C20.5768 31.3265 21.4618 31 22.5787 31H25.7491C26.8661 31 27.7424 31.3265 28.3782 31.9794C29.0312 32.6323 29.3577 33.5258 29.3577 34.6598V43.9124C29.3577 45.0464 29.0312 45.9399 28.3782 46.5928C27.7424 47.2457 26.8661 47.5722 25.7491 47.5722Z" />
                                <path d="M34.4802 47.5722H33.7327C33.5609 47.5722 33.4749 47.4691 33.4749 47.2629V31.3093C33.4749 31.1031 33.5609 31 33.7327 31H34.4286C34.5833 31 34.6864 31.0515 34.7379 31.1546L42.6511 44.7629H42.7542V31.3093C42.7542 31.1031 42.8487 31 43.0377 31H43.7594C43.9484 31 44.0429 31.1031 44.0429 31.3093V47.2629C44.0429 47.4691 43.9484 47.5722 43.7594 47.5722H43.1666C43.0119 47.5722 42.8744 47.4777 42.7542 47.2887L34.8668 33.7835H34.7637V47.2629C34.7637 47.4691 34.6692 47.5722 34.4802 47.5722Z" />
                                <path d="M51.9071 46.4124H54.8455C55.636 46.4124 56.2374 46.1976 56.6498 45.768C57.0794 45.3213 57.2942 44.6856 57.2942 43.8608V34.7113C57.2942 33.8866 57.0794 33.2594 56.6498 32.8299C56.2374 32.3832 55.636 32.1598 54.8455 32.1598H51.9071C51.1166 32.1598 50.5152 32.3832 50.1028 32.8299C49.6904 33.2594 49.4842 33.8866 49.4842 34.7113V43.8608C49.4842 44.6856 49.6904 45.3213 50.1028 45.768C50.5152 46.1976 51.1166 46.4124 51.9071 46.4124ZM56.9333 51H56.2116C55.9882 51 55.8164 50.8969 55.6961 50.6907L53.7887 47.5722H51.804C50.687 47.5722 49.8021 47.2457 49.1491 46.5928C48.4961 45.9399 48.1696 45.0464 48.1696 43.9124V34.6598C48.1696 33.5258 48.4961 32.6323 49.1491 31.9794C49.8021 31.3265 50.687 31 51.804 31H54.9486C56.0656 31 56.9505 31.3265 57.6035 31.9794C58.2565 32.6323 58.583 33.5258 58.583 34.6598V43.9124C58.583 44.9948 58.2737 45.8625 57.655 46.5155C57.0536 47.1684 56.2288 47.512 55.1806 47.5464L57.1138 50.6649C57.234 50.8883 57.1739 51 56.9333 51Z" />
                                <path d="M71.6941 31H72.4158C72.6048 31 72.6993 31.0945 72.6993 31.2835V43.9124C72.6993 45.0464 72.3728 45.9399 71.7198 46.5928C71.084 47.2457 70.2077 47.5722 69.0907 47.5722H66.2039C65.0869 47.5722 64.202 47.2457 63.549 46.5928C62.9132 45.9399 62.5953 45.0464 62.5953 43.9124V31.3093C62.5953 31.1031 62.6812 31 62.853 31H63.6005C63.7896 31 63.8841 31.1031 63.8841 31.3093V43.8608C63.8841 44.6684 64.0903 45.2955 64.5027 45.7423C64.9151 46.189 65.5165 46.4124 66.307 46.4124H68.9619C69.7523 46.4124 70.3537 46.1976 70.7661 45.768C71.1957 45.3213 71.4105 44.6856 71.4105 43.8608V31.3093C71.4105 31.1031 71.5051 31 71.6941 31Z" />
                                <path d="M85.1684 47.5722H77.2038C77.032 47.5722 76.946 47.4691 76.946 47.2629V31.3093C76.946 31.1031 77.032 31 77.2038 31H85.1684C85.3746 31 85.4777 31.0945 85.4777 31.2835V31.8763C85.4777 32.0653 85.3746 32.1598 85.1684 32.1598H78.4926C78.3207 32.1598 78.2348 32.2371 78.2348 32.3918V38.3196C78.2348 38.4742 78.3207 38.5515 78.4926 38.5515H84.4467C84.6357 38.5515 84.7303 38.646 84.7303 38.8351V39.4278C84.7303 39.6168 84.6357 39.7113 84.4467 39.7113H78.4926C78.3207 39.7113 78.2348 39.7887 78.2348 39.9433V46.1804C78.2348 46.3351 78.3207 46.4124 78.4926 46.4124H85.1684C85.3746 46.4124 85.4777 46.5069 85.4777 46.6959V47.2887C85.4777 47.4777 85.3746 47.5722 85.1684 47.5722Z" />
                                <path d="M89.2525 43.9124V42.9845C89.2525 42.7955 89.347 42.701 89.536 42.701H90.2835C90.4725 42.701 90.567 42.7955 90.567 42.9845V43.8351C90.567 45.5533 91.4004 46.4124 93.0672 46.4124H95.7479C97.4147 46.4124 98.2481 45.5447 98.2481 43.8093V42.7268C98.2481 41.9708 97.9388 41.378 97.3202 40.9485C96.7016 40.5189 95.9541 40.2096 95.0777 40.0206C94.2014 39.8316 93.3164 39.634 92.4229 39.4278C91.5465 39.2216 90.799 38.8436 90.1804 38.2938C89.5618 37.744 89.2525 37.0052 89.2525 36.0773V34.6598C89.2525 33.5258 89.5789 32.6323 90.2319 31.9794C90.8849 31.3265 91.7699 31 92.8868 31H95.8768C96.9937 31 97.8787 31.3265 98.5317 31.9794C99.1846 32.6323 99.5111 33.5258 99.5111 34.6598V35.3814C99.5111 35.5704 99.4166 35.6649 99.2276 35.6649H98.4801C98.2911 35.6649 98.1966 35.5704 98.1966 35.3814V34.7371C98.1966 33.0189 97.3632 32.1598 95.6964 32.1598H93.0415C91.3918 32.1598 90.567 33.0361 90.567 34.7887V36.0773C90.567 37.2629 91.6238 38.0619 93.7374 38.4742C94.6138 38.646 95.4901 38.8436 96.3665 39.067C97.2601 39.2904 98.0162 39.6942 98.6348 40.2784C99.2534 40.8625 99.5627 41.6529 99.5627 42.6495V43.9124C99.5627 45.0464 99.2362 45.9399 98.5832 46.5928C97.9302 47.2457 97.0453 47.5722 95.9283 47.5722H92.8868C91.7699 47.5722 90.8849 47.2457 90.2319 46.5928C89.5789 45.9399 89.2525 45.0464 89.2525 43.9124Z" />
                                <path d="M107.438 47.5722H106.69C106.501 47.5722 106.407 47.4691 106.407 47.2629V32.3918C106.407 32.2371 106.321 32.1598 106.149 32.1598H102.411C102.205 32.1598 102.102 32.0653 102.102 31.8763V31.2835C102.102 31.0945 102.205 31 102.411 31H111.691C111.897 31 112 31.0945 112 31.2835V31.8763C112 32.0653 111.897 32.1598 111.691 32.1598H107.953C107.781 32.1598 107.695 32.2371 107.695 32.3918V47.2629C107.695 47.4691 107.61 47.5722 107.438 47.5722Z" />
                            </mask>
                            <path d="M11.8563 47.5722H8.60858C7.49164 47.5722 6.60668 47.2457 5.9537 46.5928C5.3179 45.9399 5 45.0464 5 43.9124V34.6598C5 33.5258 5.3179 32.6323 5.9537 31.9794C6.60668 31.3265 7.49164 31 8.60858 31H11.8563C12.9732 31 13.8496 31.3265 14.4854 31.9794C15.1384 32.6323 15.4649 33.5258 15.4649 34.6598V35.9227C15.4649 36.1289 15.3704 36.232 15.1813 36.232H14.4596C14.2706 36.232 14.1761 36.1289 14.1761 35.9227V34.7113C14.1761 33.8866 13.9613 33.2594 13.5317 32.8299C13.1193 32.3832 12.5179 32.1598 11.7274 32.1598H8.71168C7.92123 32.1598 7.3198 32.3832 6.90739 32.8299C6.49498 33.2766 6.28878 33.9038 6.28878 34.7113V43.8608C6.28878 44.6684 6.49498 45.2955 6.90739 45.7423C7.3198 46.189 7.92123 46.4124 8.71168 46.4124H11.7274C12.5179 46.4124 13.1193 46.1976 13.5317 45.768C13.9613 45.3213 14.1761 44.6856 14.1761 43.8608V42.6495C14.1761 42.4433 14.2706 42.3402 14.4596 42.3402H15.1813C15.3704 42.3402 15.4649 42.4433 15.4649 42.6495V43.9124C15.4649 45.0464 15.1384 45.9399 14.4854 46.5928C13.8496 47.2457 12.9732 47.5722 11.8563 47.5722Z" fill="black" />
                            <path d="M22.6818 46.4124H25.6202C26.4107 46.4124 27.0121 46.1976 27.4245 45.768C27.8541 45.3213 28.0689 44.6856 28.0689 43.8608V34.7113C28.0689 33.8866 27.8541 33.2594 27.4245 32.8299C27.0121 32.3832 26.4107 32.1598 25.6202 32.1598H22.6818C21.8914 32.1598 21.29 32.3832 20.8775 32.8299C20.4651 33.2766 20.2589 33.9038 20.2589 34.7113V43.8608C20.2589 44.6684 20.4651 45.2955 20.8775 45.7423C21.29 46.189 21.8914 46.4124 22.6818 46.4124ZM25.7491 47.5722H22.5787C21.4618 47.5722 20.5768 47.2457 19.9238 46.5928C19.2881 45.9399 18.9702 45.0464 18.9702 43.9124V34.6598C18.9702 33.5258 19.2881 32.6323 19.9238 31.9794C20.5768 31.3265 21.4618 31 22.5787 31H25.7491C26.8661 31 27.7424 31.3265 28.3782 31.9794C29.0312 32.6323 29.3577 33.5258 29.3577 34.6598V43.9124C29.3577 45.0464 29.0312 45.9399 28.3782 46.5928C27.7424 47.2457 26.8661 47.5722 25.7491 47.5722Z" fill="black" />
                            <path d="M34.4802 47.5722H33.7327C33.5609 47.5722 33.4749 47.4691 33.4749 47.2629V31.3093C33.4749 31.1031 33.5609 31 33.7327 31H34.4286C34.5833 31 34.6864 31.0515 34.7379 31.1546L42.6511 44.7629H42.7542V31.3093C42.7542 31.1031 42.8487 31 43.0377 31H43.7594C43.9484 31 44.0429 31.1031 44.0429 31.3093V47.2629C44.0429 47.4691 43.9484 47.5722 43.7594 47.5722H43.1666C43.0119 47.5722 42.8744 47.4777 42.7542 47.2887L34.8668 33.7835H34.7637V47.2629C34.7637 47.4691 34.6692 47.5722 34.4802 47.5722Z" fill="black" />
                            <path d="M51.9071 46.4124H54.8455C55.636 46.4124 56.2374 46.1976 56.6498 45.768C57.0794 45.3213 57.2942 44.6856 57.2942 43.8608V34.7113C57.2942 33.8866 57.0794 33.2594 56.6498 32.8299C56.2374 32.3832 55.636 32.1598 54.8455 32.1598H51.9071C51.1166 32.1598 50.5152 32.3832 50.1028 32.8299C49.6904 33.2594 49.4842 33.8866 49.4842 34.7113V43.8608C49.4842 44.6856 49.6904 45.3213 50.1028 45.768C50.5152 46.1976 51.1166 46.4124 51.9071 46.4124ZM56.9333 51H56.2116C55.9882 51 55.8164 50.8969 55.6961 50.6907L53.7887 47.5722H51.804C50.687 47.5722 49.8021 47.2457 49.1491 46.5928C48.4961 45.9399 48.1696 45.0464 48.1696 43.9124V34.6598C48.1696 33.5258 48.4961 32.6323 49.1491 31.9794C49.8021 31.3265 50.687 31 51.804 31H54.9486C56.0656 31 56.9505 31.3265 57.6035 31.9794C58.2565 32.6323 58.583 33.5258 58.583 34.6598V43.9124C58.583 44.9948 58.2737 45.8625 57.655 46.5155C57.0536 47.1684 56.2288 47.512 55.1806 47.5464L57.1138 50.6649C57.234 50.8883 57.1739 51 56.9333 51Z" fill="black" />
                            <path d="M71.6941 31H72.4158C72.6048 31 72.6993 31.0945 72.6993 31.2835V43.9124C72.6993 45.0464 72.3728 45.9399 71.7198 46.5928C71.084 47.2457 70.2077 47.5722 69.0907 47.5722H66.2039C65.0869 47.5722 64.202 47.2457 63.549 46.5928C62.9132 45.9399 62.5953 45.0464 62.5953 43.9124V31.3093C62.5953 31.1031 62.6812 31 62.853 31H63.6005C63.7896 31 63.8841 31.1031 63.8841 31.3093V43.8608C63.8841 44.6684 64.0903 45.2955 64.5027 45.7423C64.9151 46.189 65.5165 46.4124 66.307 46.4124H68.9619C69.7523 46.4124 70.3537 46.1976 70.7661 45.768C71.1957 45.3213 71.4105 44.6856 71.4105 43.8608V31.3093C71.4105 31.1031 71.5051 31 71.6941 31Z" fill="black" />
                            <path d="M85.1684 47.5722H77.2038C77.032 47.5722 76.946 47.4691 76.946 47.2629V31.3093C76.946 31.1031 77.032 31 77.2038 31H85.1684C85.3746 31 85.4777 31.0945 85.4777 31.2835V31.8763C85.4777 32.0653 85.3746 32.1598 85.1684 32.1598H78.4926C78.3207 32.1598 78.2348 32.2371 78.2348 32.3918V38.3196C78.2348 38.4742 78.3207 38.5515 78.4926 38.5515H84.4467C84.6357 38.5515 84.7303 38.646 84.7303 38.8351V39.4278C84.7303 39.6168 84.6357 39.7113 84.4467 39.7113H78.4926C78.3207 39.7113 78.2348 39.7887 78.2348 39.9433V46.1804C78.2348 46.3351 78.3207 46.4124 78.4926 46.4124H85.1684C85.3746 46.4124 85.4777 46.5069 85.4777 46.6959V47.2887C85.4777 47.4777 85.3746 47.5722 85.1684 47.5722Z" fill="black" />
                            <path d="M89.2525 43.9124V42.9845C89.2525 42.7955 89.347 42.701 89.536 42.701H90.2835C90.4725 42.701 90.567 42.7955 90.567 42.9845V43.8351C90.567 45.5533 91.4004 46.4124 93.0672 46.4124H95.7479C97.4147 46.4124 98.2481 45.5447 98.2481 43.8093V42.7268C98.2481 41.9708 97.9388 41.378 97.3202 40.9485C96.7016 40.5189 95.9541 40.2096 95.0777 40.0206C94.2014 39.8316 93.3164 39.634 92.4229 39.4278C91.5465 39.2216 90.799 38.8436 90.1804 38.2938C89.5618 37.744 89.2525 37.0052 89.2525 36.0773V34.6598C89.2525 33.5258 89.5789 32.6323 90.2319 31.9794C90.8849 31.3265 91.7699 31 92.8868 31H95.8768C96.9937 31 97.8787 31.3265 98.5317 31.9794C99.1846 32.6323 99.5111 33.5258 99.5111 34.6598V35.3814C99.5111 35.5704 99.4166 35.6649 99.2276 35.6649H98.4801C98.2911 35.6649 98.1966 35.5704 98.1966 35.3814V34.7371C98.1966 33.0189 97.3632 32.1598 95.6964 32.1598H93.0415C91.3918 32.1598 90.567 33.0361 90.567 34.7887V36.0773C90.567 37.2629 91.6238 38.0619 93.7374 38.4742C94.6138 38.646 95.4901 38.8436 96.3665 39.067C97.2601 39.2904 98.0162 39.6942 98.6348 40.2784C99.2534 40.8625 99.5627 41.6529 99.5627 42.6495V43.9124C99.5627 45.0464 99.2362 45.9399 98.5832 46.5928C97.9302 47.2457 97.0453 47.5722 95.9283 47.5722H92.8868C91.7699 47.5722 90.8849 47.2457 90.2319 46.5928C89.5789 45.9399 89.2525 45.0464 89.2525 43.9124Z" fill="black" />
                            <path d="M107.438 47.5722H106.69C106.501 47.5722 106.407 47.4691 106.407 47.2629V32.3918C106.407 32.2371 106.321 32.1598 106.149 32.1598H102.411C102.205 32.1598 102.102 32.0653 102.102 31.8763V31.2835C102.102 31.0945 102.205 31 102.411 31H111.691C111.897 31 112 31.0945 112 31.2835V31.8763C112 32.0653 111.897 32.1598 111.691 32.1598H107.953C107.781 32.1598 107.695 32.2371 107.695 32.3918V47.2629C107.695 47.4691 107.61 47.5722 107.438 47.5722Z" fill="black" />
                            <path d="M11.8563 47.5722H8.60858C7.49164 47.5722 6.60668 47.2457 5.9537 46.5928C5.3179 45.9399 5 45.0464 5 43.9124V34.6598C5 33.5258 5.3179 32.6323 5.9537 31.9794C6.60668 31.3265 7.49164 31 8.60858 31H11.8563C12.9732 31 13.8496 31.3265 14.4854 31.9794C15.1384 32.6323 15.4649 33.5258 15.4649 34.6598V35.9227C15.4649 36.1289 15.3704 36.232 15.1813 36.232H14.4596C14.2706 36.232 14.1761 36.1289 14.1761 35.9227V34.7113C14.1761 33.8866 13.9613 33.2594 13.5317 32.8299C13.1193 32.3832 12.5179 32.1598 11.7274 32.1598H8.71168C7.92123 32.1598 7.3198 32.3832 6.90739 32.8299C6.49498 33.2766 6.28878 33.9038 6.28878 34.7113V43.8608C6.28878 44.6684 6.49498 45.2955 6.90739 45.7423C7.3198 46.189 7.92123 46.4124 8.71168 46.4124H11.7274C12.5179 46.4124 13.1193 46.1976 13.5317 45.768C13.9613 45.3213 14.1761 44.6856 14.1761 43.8608V42.6495C14.1761 42.4433 14.2706 42.3402 14.4596 42.3402H15.1813C15.3704 42.3402 15.4649 42.4433 15.4649 42.6495V43.9124C15.4649 45.0464 15.1384 45.9399 14.4854 46.5928C13.8496 47.2457 12.9732 47.5722 11.8563 47.5722Z" stroke="black" mask="url(#path-3-outside-1_0_1163)" />
                            <path d="M22.6818 46.4124H25.6202C26.4107 46.4124 27.0121 46.1976 27.4245 45.768C27.8541 45.3213 28.0689 44.6856 28.0689 43.8608V34.7113C28.0689 33.8866 27.8541 33.2594 27.4245 32.8299C27.0121 32.3832 26.4107 32.1598 25.6202 32.1598H22.6818C21.8914 32.1598 21.29 32.3832 20.8775 32.8299C20.4651 33.2766 20.2589 33.9038 20.2589 34.7113V43.8608C20.2589 44.6684 20.4651 45.2955 20.8775 45.7423C21.29 46.189 21.8914 46.4124 22.6818 46.4124ZM25.7491 47.5722H22.5787C21.4618 47.5722 20.5768 47.2457 19.9238 46.5928C19.2881 45.9399 18.9702 45.0464 18.9702 43.9124V34.6598C18.9702 33.5258 19.2881 32.6323 19.9238 31.9794C20.5768 31.3265 21.4618 31 22.5787 31H25.7491C26.8661 31 27.7424 31.3265 28.3782 31.9794C29.0312 32.6323 29.3577 33.5258 29.3577 34.6598V43.9124C29.3577 45.0464 29.0312 45.9399 28.3782 46.5928C27.7424 47.2457 26.8661 47.5722 25.7491 47.5722Z" stroke="black" mask="url(#path-3-outside-1_0_1163)" />
                            <path d="M34.4802 47.5722H33.7327C33.5609 47.5722 33.4749 47.4691 33.4749 47.2629V31.3093C33.4749 31.1031 33.5609 31 33.7327 31H34.4286C34.5833 31 34.6864 31.0515 34.7379 31.1546L42.6511 44.7629H42.7542V31.3093C42.7542 31.1031 42.8487 31 43.0377 31H43.7594C43.9484 31 44.0429 31.1031 44.0429 31.3093V47.2629C44.0429 47.4691 43.9484 47.5722 43.7594 47.5722H43.1666C43.0119 47.5722 42.8744 47.4777 42.7542 47.2887L34.8668 33.7835H34.7637V47.2629C34.7637 47.4691 34.6692 47.5722 34.4802 47.5722Z" stroke="black" mask="url(#path-3-outside-1_0_1163)" />
                            <path d="M51.9071 46.4124H54.8455C55.636 46.4124 56.2374 46.1976 56.6498 45.768C57.0794 45.3213 57.2942 44.6856 57.2942 43.8608V34.7113C57.2942 33.8866 57.0794 33.2594 56.6498 32.8299C56.2374 32.3832 55.636 32.1598 54.8455 32.1598H51.9071C51.1166 32.1598 50.5152 32.3832 50.1028 32.8299C49.6904 33.2594 49.4842 33.8866 49.4842 34.7113V43.8608C49.4842 44.6856 49.6904 45.3213 50.1028 45.768C50.5152 46.1976 51.1166 46.4124 51.9071 46.4124ZM56.9333 51H56.2116C55.9882 51 55.8164 50.8969 55.6961 50.6907L53.7887 47.5722H51.804C50.687 47.5722 49.8021 47.2457 49.1491 46.5928C48.4961 45.9399 48.1696 45.0464 48.1696 43.9124V34.6598C48.1696 33.5258 48.4961 32.6323 49.1491 31.9794C49.8021 31.3265 50.687 31 51.804 31H54.9486C56.0656 31 56.9505 31.3265 57.6035 31.9794C58.2565 32.6323 58.583 33.5258 58.583 34.6598V43.9124C58.583 44.9948 58.2737 45.8625 57.655 46.5155C57.0536 47.1684 56.2288 47.512 55.1806 47.5464L57.1138 50.6649C57.234 50.8883 57.1739 51 56.9333 51Z" stroke="black" mask="url(#path-3-outside-1_0_1163)" />
                            <path d="M71.6941 31H72.4158C72.6048 31 72.6993 31.0945 72.6993 31.2835V43.9124C72.6993 45.0464 72.3728 45.9399 71.7198 46.5928C71.084 47.2457 70.2077 47.5722 69.0907 47.5722H66.2039C65.0869 47.5722 64.202 47.2457 63.549 46.5928C62.9132 45.9399 62.5953 45.0464 62.5953 43.9124V31.3093C62.5953 31.1031 62.6812 31 62.853 31H63.6005C63.7896 31 63.8841 31.1031 63.8841 31.3093V43.8608C63.8841 44.6684 64.0903 45.2955 64.5027 45.7423C64.9151 46.189 65.5165 46.4124 66.307 46.4124H68.9619C69.7523 46.4124 70.3537 46.1976 70.7661 45.768C71.1957 45.3213 71.4105 44.6856 71.4105 43.8608V31.3093C71.4105 31.1031 71.5051 31 71.6941 31Z" stroke="black" mask="url(#path-3-outside-1_0_1163)" />
                            <path d="M85.1684 47.5722H77.2038C77.032 47.5722 76.946 47.4691 76.946 47.2629V31.3093C76.946 31.1031 77.032 31 77.2038 31H85.1684C85.3746 31 85.4777 31.0945 85.4777 31.2835V31.8763C85.4777 32.0653 85.3746 32.1598 85.1684 32.1598H78.4926C78.3207 32.1598 78.2348 32.2371 78.2348 32.3918V38.3196C78.2348 38.4742 78.3207 38.5515 78.4926 38.5515H84.4467C84.6357 38.5515 84.7303 38.646 84.7303 38.8351V39.4278C84.7303 39.6168 84.6357 39.7113 84.4467 39.7113H78.4926C78.3207 39.7113 78.2348 39.7887 78.2348 39.9433V46.1804C78.2348 46.3351 78.3207 46.4124 78.4926 46.4124H85.1684C85.3746 46.4124 85.4777 46.5069 85.4777 46.6959V47.2887C85.4777 47.4777 85.3746 47.5722 85.1684 47.5722Z" stroke="black" mask="url(#path-3-outside-1_0_1163)" />
                            <path d="M89.2525 43.9124V42.9845C89.2525 42.7955 89.347 42.701 89.536 42.701H90.2835C90.4725 42.701 90.567 42.7955 90.567 42.9845V43.8351C90.567 45.5533 91.4004 46.4124 93.0672 46.4124H95.7479C97.4147 46.4124 98.2481 45.5447 98.2481 43.8093V42.7268C98.2481 41.9708 97.9388 41.378 97.3202 40.9485C96.7016 40.5189 95.9541 40.2096 95.0777 40.0206C94.2014 39.8316 93.3164 39.634 92.4229 39.4278C91.5465 39.2216 90.799 38.8436 90.1804 38.2938C89.5618 37.744 89.2525 37.0052 89.2525 36.0773V34.6598C89.2525 33.5258 89.5789 32.6323 90.2319 31.9794C90.8849 31.3265 91.7699 31 92.8868 31H95.8768C96.9937 31 97.8787 31.3265 98.5317 31.9794C99.1846 32.6323 99.5111 33.5258 99.5111 34.6598V35.3814C99.5111 35.5704 99.4166 35.6649 99.2276 35.6649H98.4801C98.2911 35.6649 98.1966 35.5704 98.1966 35.3814V34.7371C98.1966 33.0189 97.3632 32.1598 95.6964 32.1598H93.0415C91.3918 32.1598 90.567 33.0361 90.567 34.7887V36.0773C90.567 37.2629 91.6238 38.0619 93.7374 38.4742C94.6138 38.646 95.4901 38.8436 96.3665 39.067C97.2601 39.2904 98.0162 39.6942 98.6348 40.2784C99.2534 40.8625 99.5627 41.6529 99.5627 42.6495V43.9124C99.5627 45.0464 99.2362 45.9399 98.5832 46.5928C97.9302 47.2457 97.0453 47.5722 95.9283 47.5722H92.8868C91.7699 47.5722 90.8849 47.2457 90.2319 46.5928C89.5789 45.9399 89.2525 45.0464 89.2525 43.9124Z" stroke="black" mask="url(#path-3-outside-1_0_1163)" />
                            <path d="M107.438 47.5722H106.69C106.501 47.5722 106.407 47.4691 106.407 47.2629V32.3918C106.407 32.2371 106.321 32.1598 106.149 32.1598H102.411C102.205 32.1598 102.102 32.0653 102.102 31.8763V31.2835C102.102 31.0945 102.205 31 102.411 31H111.691C111.897 31 112 31.0945 112 31.2835V31.8763C112 32.0653 111.897 32.1598 111.691 32.1598H107.953C107.781 32.1598 107.695 32.2371 107.695 32.3918V47.2629C107.695 47.4691 107.61 47.5722 107.438 47.5722Z" stroke="black" mask="url(#path-3-outside-1_0_1163)" />
                        </svg>

                    </Link>
                    <img
                        src="/bredcrumb_img.PNG"
                        alt="icon"
                        className="navbar-toggler p-0 border-0"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarScroll"
                        aria-controls="navbarScroll"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        style={{ cursor: "pointer" }}
                    />
                    <div className="collapse navbar-collapse justify-content-end" id="navbarScroll">
                        <ul className="navbar-nav navbar-nav-scroll gradient-background p-1">
                            <li className="nav-item">
                                <Link className="nav-link text-white fw-semibold mx-3 py-3 " to={"/games"}>
                                    GAMES
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white fw-semibold mx-3 py-3" to={"/About"}>ABOUT</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white fw-semibold mx-3 py-3" href={"/three-card"}>
                                    TOURNAMENTS
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white fw-semibold mx-3 py-3" to={"/Contact"}>CONTACT</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white fw-semibold mx-3 py-3" to={"/Jackpots"}>
                                    JACKPOTS
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white fw-semibold mx-3 py-3" to={"/Events"}>
                                    EVENTS
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white fw-semibold mx-3 py-3" to={"/Community"}>
                                    COMMUNITY
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
