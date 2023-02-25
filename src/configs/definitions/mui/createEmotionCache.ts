import createCache from "@emotion/cache";
import { prefixer } from "stylis";

const createEmotionCache = () => {
    return createCache({
        key: "css",
        prepend: true,
        stylisPlugins: [prefixer],
    });
};

export default createEmotionCache;
