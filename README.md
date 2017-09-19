# Dataquest Embeddable Interactive Code System

## Usage Steps
1) Add the following html to your blog/site

```html
<script src="//dqeditor.dataquest.io/dq_post_box.js"></script>
<iframe name="dq_editor" width="100%" height=700 src="//dqeditor.dataquest.io/" style="border: none" >
  <pre id='initialization-code'>
  </pre>
  <pre id='code'>
  </pre>
  <pre id="hint">
  </pre>
  <pre id='answer-code' check-vars="">
  </pre>
</iframe>
```
2) Save and publish!

## Sections Details
### Changing height
To change the height change the attribute `height=700` to a different pixel size.

### `<pre id="code">`
The code provided here will be what the editor starts with when rendered to the student.

### `<pre id="hint">`
The markdown text here will be shown when the student asks for a hint.

### `<pre id="initialization-code">`
The code provided here will be prepended to the student code before running.

### `<pre id="answer-code">`
The code provide here will be used in the checks

#### Checking variables
To check variables between the answer-code and student code list them, common seperated on the attribue `check-vars=""` like `check-vars="x, count"`

#### Checking output
To check the output (i.e., stdout) add the attribute `check-stdout`. If you do not want to check the stdout remove the attribute.


## Example

```html
<script src="//dqeditor.dataquest.io/dq_post_box.js"></script>
<iframe name="dq_editor" width="100%" height=700 src="//dqeditor.dataquest.io/" style="border: none" >
  <pre id='code'>
    a = 1
    b = 2
    if (a < b)
     print('smaller')
  </pre>
  <pre id="hint">
    # markdown here
    code \`print()\`
  </pre>
  <pre id='initialization-code'>
    y = False
    print('smaller')
  </pre>
  <pre id='answer-code' check-vars="x, count" check-stdout>
    x = True
    count = 5
    if x:
     for count in range(count):
      print(count)
  </pre>
</iframe>
```
