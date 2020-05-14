const PREFIX = `<?xml version="1.0" encoding="UTF-8"?>
<openbox_pipe_menu>
`;
const SUFFIX = `
</openbox_pipe_menu>`;

module.exports = {
    fromObject: function(obj) {
        const traverse = obj => {
            return Object.entries(obj).map(([key, val]) => {
                if (typeof val === 'object')
                    return `<menu id="${key}" label="${key}">${traverse(val)}</menu>`;
                else
                    return `<item label="${key}"><action name="Execute"><execute>${val}</execute></action></item>`;

            }).join('\n');
        };
        return `${PREFIX}${traverse(obj)}${SUFFIX}`;
    }
};