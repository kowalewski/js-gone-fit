export const createScript = ({ url, tagId }) => {
    const script = document.createElement('script');
    script.setAttribute('id', tagId);
    script.src = url;
    document.getElementsByTagName('body')[0].appendChild(script);
    return script;
};

export const loadScript = (script) => {
    const scriptTag = createScript(script);

    return new Promise((resolve, reject) => {
        scriptTag.onload = () => {
            resolve();
        };
        scriptTag.onerror = () => { reject(); };
    });
};

export const print = (id, message) => {
    document.getElementById(id).innerHTML = message;
};

export const intersectionObserver = (id, callback) => {
    const element = document.getElementById(id);
    const config = {
        rootMargin: '0px 0px 50px 0px',
        threshold: 0,
    };

    const observer = new IntersectionObserver((entries, self) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                callback();
                self.unobserve(entry.target);
            }
        });
    }, config);

    observer.observe(element);
};

// unused function
export const unusedFunction = a => b => a + b;
export const anotherUnusedFunction = (id, message) => {
    const element = document.getElementById(id);
    element.innerHTML = message;
    return element;
};

export default {
    createScript,
    loadScript,
    print,
    intersectionObserver,
    unusedFunction,
    anotherUnusedFunction,
};
