export const useBtnData = (params) => {
    const { data: buttonData } = useAsyncData("btnData", () => queryCollection("components").path("/components/buttons").first());
    let result = computed(() => {
        if(buttonData.value) {
            return buttonData.value[params]
        } else {
            return "could not retrieve buttonData"
        }
    })
    return result;
}

