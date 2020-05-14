# openbox-pipemenu-js

Passing...

```json
{
    "Submenu 1": {
        "Item 1": "discord",
        "Item 2": "rofi -show run",
        "Submenu 2": {
            "Item 3": "brave-browser"
        }
    },
    "Item 4": "urxvt"
}
```

...into `fromObject()` will result in...

```xml
<?xml version="1.0" encoding="UTF-8"?>
<openbox_pipe_menu>
    <menu id="Submenu 1" label="Submenu 1">
        <item label="Item 1"><action name="Execute"><execute>discord</execute></action></item>
        <item label="Item 2"><action name="Execute"><execute>rofi -show run</execute></action></item>
        <menu id="Submenu 2" label="Submenu 2">
            <item label="Item 3"><action name="Execute"><execute>brave-browser</execute></action></item>
        </menu>
    </menu>
    <item label="Item 4"><action name="Execute"><execute>urxvt</execute></action></item>
</openbox_pipe_menu>
```
