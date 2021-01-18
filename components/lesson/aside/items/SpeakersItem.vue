<template>
    <div class="asideSpeakers_item" :class="{'asideSpeakers_item--isYou':setup.id===1}">

        <div class="asideSpeakers_item_photoBlock">

            <img src="@imgs/speaker-52x52.png" alt="" class="asideSpeakers_item_ptoto">

        </div>

        <div class="asideSpeakers_item_content">

            <h3 class="asideSpeakers_item_title">{{setup.name}}</h3>

            <div class="asideSpeakers_item_meta">

                <span class="asideSpeakers_item_role">{{setup.role}}</span>

                <div class="asideSpeakers_item_points">

                    <span class="asideSpeakers_item_points_val">{{setup.points}}</span>

                    <fa-icon class="asideSpeakers_item_points_icon" :icon="['fac', 'skill-points']" />

                </div>

            </div>

        </div>

    </div>
</template>
<script>
    export default {
        name: 'aside-speakers-item',
        props: {
            setup: {
                type: Object,
                required: true
            }
        }
    }
</script>
