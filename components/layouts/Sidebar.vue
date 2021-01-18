<template>

    <aside class="sidebar">

        <div class="sidebar_logoBlock">
            <nuxt-link to="/" class="sidebar_logo">
                <fa-icon class="sidebar_logo_icon" :icon="['fac', 'logo']" />
            </nuxt-link>
        </div>

        <nav class="sidebar_menu">
            <ul class="sidebar_menu_list">
                <li class="sidebar_menu_item">
                    <nuxt-link class="sidebar_menu_lnk" to="/lms/courses/">
                        <svg class="sidebar_menu_icon" width="32" height="19" viewBox="0 0 32 19" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path class="sidebar_menu_icon_partLight"
                                  d="M25.0862 7.4502V14.9921C18.449 17.8877 12.6012 17.9371 6.30918 14.8685V7.4502"
                                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path class="sidebar_menu_icon_partDark"
                                  d="M26.2604 6.97502L17.6873 9.61927C17.6873 9.61927 16.3671 9.97996 15.54 10.0019C14.634 10.026 13.4247 9.61927 13.4247 9.61927L1.00481 5.62461L12.891 1.43054C12.891 1.43054 14.3781 0.996705 15.4443 1.00002C16.5003 1.0033 18.0592 1.43054 18.0592 1.43054L29.9727 4.98285V13.7176"
                                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <circle class="sidebar_menu_icon_partDark" r="0.988949"
                                    transform="matrix(-1 0 0 1 29.8665 14.6159)" stroke-width="2"/>
                        </svg>
                    </nuxt-link>
                </li>
                <li class="sidebar_menu_item">
                    <nuxt-link class="sidebar_menu_lnk" to="/lms/hometasks/">
                        <svg class="sidebar_menu_icon" width="22" height="27" viewBox="0 0 22 27" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path class="sidebar_menu_icon_partLight"
                                  d="M15 2C15 2 15 3.63636 15 5.27273C15 6.90909 16.0909 8 17.7273 8C19.3636 8 21 8 21 8"
                                  stroke-width="2"/>
                            <path class="sidebar_menu_icon_partLight"
                                  d="M1 5C1 2.79086 2.79086 1 5 1H11H15.0775C16.2926 1 17.4419 1.55236 18.201 2.50122L19 3.5L20.1235 4.90434C20.6909 5.6136 21 6.49484 21 7.40312V13.5V22C21 24.2091 19.2091 26 17 26H5C2.79086 26 1 24.2091 1 22V5Z"
                                  stroke-width="2"/>
                            <path class="sidebar_menu_icon_partDark" d="M6 6H11" stroke-width="2"
                                  stroke-linecap="round"/>
                            <path class="sidebar_menu_icon_partDark" d="M6 16H16" stroke-width="2"
                                  stroke-linecap="round"/>
                            <path class="sidebar_menu_icon_partDark" d="M6 11H11M16 11H15" stroke-width="2"
                                  stroke-linecap="round"/>
                            <path class="sidebar_menu_icon_partDark" d="M6 21H16" stroke-width="2"
                                  stroke-linecap="round"/>
                        </svg>
                    </nuxt-link>
                </li>
                <li class="sidebar_menu_item">
                    <nuxt-link class="sidebar_menu_lnk" to="/lms/profile">
                        <svg class="sidebar_menu_icon" width="27" height="26" viewBox="0 0 27 26" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path class="sidebar_menu_icon_partLight"
                                  d="M12.5 14C12.5 14 1.00043 15.3412 1.00005 20.5C1 21.1683 0.999994 22.1345 1 23.0004C1.00002 24.1049 1.89543 25 2.99998 25H23.5C24.6046 25 25.5 24.1048 25.5 23.0002C25.5 22.3893 25.5 21.6947 25.5 21C25.5 18.3178 22.5 16.5 21 16"
                                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <circle class="sidebar_menu_icon_partDark" cx="13.5" cy="7.5" r="6.5" stroke-width="2"/>
                            <path class="sidebar_menu_icon_partDark" d="M10 18C10 18 6.07143 18.3332 5 20"
                                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </nuxt-link>
                </li>
            </ul>
        </nav>


        <fa-icon :icon="['fac', toggleIcon]" class="sidebar_themeToggler" @click="toggleTheme"/>

        <nuxt-link class="sidebar_logout" to="/">
            <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 7V4C17 2.34315 15.6569 1 14 1H4C2.34315 1 1 2.34315 1 4V22C1 23.6569 2.34315 25 4 25H14C15.6569 25 17 23.6569 17 22V19"
                      stroke="#CED5E1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11 13L20 13" stroke="#8C93A3" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <path d="M8 17H11" stroke="#8C93A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5 21L8 21" stroke="#8C93A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18 10L20.2929 12.2929C20.6834 12.6834 20.6834 13.3166 20.2929 13.7071L18 16" stroke="#8C93A3"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </nuxt-link>

    </aside>

</template>

<script>
    import {mapGetters} from 'vuex';
    import {TOGGLE_THEME} from "@const/mutations-type";
    import {GET_THEME} from "@const/getters-types";

    export default {
        name: "Sidebar",
        methods:{
            toggleTheme(){
                this.$store.commit(TOGGLE_THEME)
            }
        },
        computed:{
            toggleIcon(){
                console.log(this.$store.getters[GET_THEME], )
                return this.$store.getters[GET_THEME] === 'light'?'moon':'sun'
            }
        }
    }

</script>
