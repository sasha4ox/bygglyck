

// export default function useMobile() { 
//     function scrollFunction() {
//         const isMobile = window.innerWidth < 950;
//         if (isMobile) return;
//         if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
//             document.getElementById("header").classList.add(styles.smallHeader)
//         } else {
//             document.getElementById("header").classList.remove(styles.smallHeader)
//         }
//     }
//     useEffect(() => {
//         //add eventlistener to window
//         window.addEventListener("scroll", scrollFunction, { passive: true });
//         // remove event on unmount to prevent a memory leak with the cleanup
//         return () => {
//             window.removeEventListener("scroll", scrollFunction, { passive: true });
//         }
//     }, []);
//     return 
// }