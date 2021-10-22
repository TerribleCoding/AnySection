<img src="assets/ico/tool-logo.png" height="52pt">

AnySection is a powerful web tool for calculating phisical and mechanical properties of standard geometry bars.

Can be used by designers and engineers as a quick estimation tool, as well as by students as a geometry tool, or simply to find material data from the database.

## License

This product is intended for digital use only. It is prohibited to copy or distribute the whole or part of it, unless accorded between the parts.

## Usage

#### The basics

Choose the shape you want to calculate features by clicking the corresponding image or name.
You'll be redirected to the dedicated page where you can insert available data on the *_Dimensional data_* and *_Material data_* tables (blue tables).

Wether results will be available while inserting data, they will show in the bottom tables (orange tables).
e.g.: If you're looking for the area of a rectangle as the base **and** the height will be filled in you'll have the result otherwise the field will be empty.

You can use the arrows on the right side of any input field to raise or decrease it by 1 unit, for your convenience.
For a quicker input process, it is suggested to use the _Tab_ key to jump on the next input field.

Results updates trigger whenever **one** of these events occur:

- Click release on input arrows
- Pressing _Enter_ key on an input field
- Changing field with _Tab_ key
- Changing material selecting it from the provided list
- Clicking anywhere on the page, after editing of a number, deselecting the input field
- Clicking on dimension swap button

All texts and numbers on the pages are able to be copied and pasted anywhere you need.

A button for getting back to the main page is provided on every profile page, directly below its title.

#### Equation page

The equations page is intuitive to use: clicking the shape from the list on the left makes the math for that shape visible.
Some other extra features from MathJax library are also available when right-clicking on a equation, like the ability of zooming the expression or copying the LaTex string for further use.

#### Expression Editor

The core new feature from version 1.4 is the Expression Editor.
This editor allows the user to quickly calculate the result of a mathematical expression and use it as a data input for the shape calculation process.

Any numerical input field from the *_Dimensional data_* and *_Material data_* tables (blue ones) can be used as targets for the expression calculation, in any of the shape pages.
The Editor can be opened by pressing the "=" key on the keyboard while the related numerical input is selected.

A popup with the Editor itself will appear over the content, showing:
- the variable selected to be the target for the result,
- an empty text field for the expression,
- the result preview of the expression,
- an icon indicating if any errors are detected in the expression

Start typing the math expression in the text field and the preview will be updated in real time. Characters allowed for a correct calculation are digits from 0 to 9 and _. + - * / ( )_. Use the dot _"."_ as the decimal separator.

The editor can be left anytime by clicking the top-right X icon or pressing "Esc" on the keyboard and no action will be performed.

If the result of the typed expression is valid (green check icon after the result preview) it can be pasted in the related data input of the shape page. To use it, click the _"Use result"_ button on the bottom of the popup, or type "Enter" on the keyboard when the expression field is selected.

The result will be pasted into the table and the popup disappears. This can be used multiple times in any page.

## Known bugs and issues

#### Ellipse perimeter not exact

The formula used to get the perimeter is not an exact calculation, however is roughly the best approximation available.
Notice that the more "squished" the ellipse, the more imprecise the result.
The formula has been updated to a better one - the actual one - in version 1.2 and the approximation is totally suitable for the intended use of this tool.
This might mean that it won't be upgraded to an even more precise calculation (infinite series are not infinite in programming).

#### Truncated material names

When a material is selected from the dropdown menu, often the name overflows the space available.
The issue will be solved in a future release.

#### Expression Editor

When the Editor is opened trough the "=" key, the expression text input is meant to be focused automatically.
This should avoid moving hands to get back to the mouse and to the keyboard again, but something didn't work as expected.

If something is typed in the expression input field, if all characters in it are deleted, the result will be marked as "undefined".
This result can also be pasted into the related data input, but nothing will happen as they're numerical inputs.

When confirming the result of the editor to be pasted in the data, results are not calculated with the new number.
The page starts calculating again when another data is entered by directly typing the number, the ìn pressing Enter, Tab or clicking away.

All these issues will be fixed in a future patch.

## Next improvements to be added

Note: _The order of this list might not match the order these features will be added through next versions._
- More materials in the database
- Materials divided in groups, in order to filter the available ones
- Result finder (let the program change an input to return a specific result)
- Limiting inputs to generate valid geometry (e.g. a tube D=10, t=6 is not valid)
- Canvas to see the shape change dynamically while typing and changing data
- Shape will be downloadable in many file formats, to speed up engineers' work
- Dinamically change data units to type/see inputs/results in a different scale

## Versions log

#### v1.4

_Release date: October 22, 2021_

_Work Time: 8h_

- Added the Expression Editor, where math expressions can be calculated and the result can be pasted as a data input
- Some bugs related to the development of the Editor are still unfixed, but anyway it can be used correctly

#### v1.3

_Release date: July 25, 2021_

_Work Time: 11h 30min_

- Footer has been changed in a sidebar on the right
- Added equations page showing formulas and symbols used in the tool
- Bugs can be reported via Github or Google modules, from the "Credits" popup

#### v1.2

_Release date: April 25, 2021_

_Work Time: 45min_

- Limited numerical inputs to positive values
- Improved precision for ellipses' perimeter

#### v1.1

_Release date: April 18, 2021_

_Work Time: 1h_

- Fixed issue #1 - Favicon not working.
- Added a dimension swapper button for rectangles and ellipses. Click it to swap width and height rapidly.

#### v1.0

_Release date: March 27, 2021_

_Work Time: unknown, project directory created on Jan 14, 2021_

First release composed by an index page and 13 standard shapes to choose. Tables on every profile page for inserting shape data and material data or choose from presetted materials.

## Team & Credits

#### Team
- Nazzareno Pasqual [@TerribleCoding](https://github.com/TerribleCoding) (project owner and main developer)
- Riccardo Pellegrin [@Pelle96](https://github.com/Pelle96) (graphics design)

#### Libraries
- [p5.js](https://p5js.org/) javascript library
- [MathJax](https://www.mathjax.org/) javascript library

#### Media
- Favicon made by [Vitaliy Gorbachev](https://www.flaticon.com/authors/vitaly-gorbachev) from [www.flaticon.com](https://www.flaticon.com/)
- Icons made by [Freepik](https://www.freepik.com) from [www.flaticon.com](https://www.flaticon.com/)
- Web font icons from [UIcons](https://www.flaticon.com/uicons) on [www.flaticon.com](https://www.flaticon.com/)
