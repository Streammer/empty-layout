import { initEventsLikeDislikeButton } from "./modules/like-dislike";
import { Tabs } from "./modules/ui/tabs"

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.ui-tabs').forEach((tab)=>{
        new Tabs({rootNode: tab});
    })
    initEventsLikeDislikeButton();
})