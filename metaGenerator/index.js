const root = document.getElementById("content");

let variables = {
    title: '',
    description: '',
    keywords: '',
    image: '',
    url: '',
    buttonURL: '',
    buttontext: ''
};

const form = `      

<div class="field">
<div class="control">

  <label for="title" class="label">
    Weboldal címe <small id="titleRemaining">(karakter van hátra)</small> 
  </label>
  <input class="input" name="title" type="text" placeholder="Maximum 70 karakter" onchange="handleChange(event)"> </input>

  </div>
</div>

<div class="field">
<div class="control">

  <label for="description" class="label">
    Oldal leírása <small id="descRemaining">(karakter van hátra)</small>
  </label>
  <textarea class="textarea" name="description" type="text" placeholder="Maximum 150 karakter" onchange="handleChange(event)"></textarea>

</div>
</div>

<div class="field">
<div class="control">

  <label for="Image" class="label">
    Oldal fő képe
  </label>
  <input class="input" name="image" type="text" placeholder="Ide illeszd be a weboldalad fő képe linkjét" onchange="handleChange(event)"> </input>
</div>
</div>
<div class="field">
<div class="control">
  <label for="URL" class="label">
    Weboldal linkje
  </label>
  <input
    class="input"
    name="url"
    type="text"
    placeholder="Ide írd be a weboldal linkjét"
    onchange="handleChange(event)"
  ></input>
</div>
</div>

<div class="field">
<div class="control">
  <label for="keywords" class="label">
    Oldal kulcsszavai (vesszővel elválasztva)
  </label>
  <textarea
    class="textarea"
    name="keywords"
    type="text"
    placeholder="szo1,szo2,szo3"
    onchange="handleChange(event)"
  ></textarea>
</div>
</div>
<div class="field">
<div class="control">
  <label for="buttonURL" class="label">
    Picnode Button linkje
  </label>
  <textarea
    class="textarea"
    name="buttonURL"
    type="text"
    placeholder="Ide írd az  URL-t ahova a picnode gombja elvezet"
    onchange="handleChange(event)"
  ></textarea>
</div>
</div>
<div class="field">
<div class="control">
  <label for="buttontext" class="label">
    Picnode Button linkje
  </label>
  <textarea
    class="textarea"
    name="buttontext"
    type="text"
    placeholder="A PicNode Chat gomb szövege"
    onchange="handleChange(event)"
  ></textarea>
</div>
</div>
<button class="button is-success" type="submit" onclick="handleClick(event)">
Generáld le a meta-tagokat!
</button>
`;


const meta = `
  <!-- Primary Meta Tags -->
  <title>${variables.title}</title>
  <meta name="title" content="${variables.title}">
  <meta name="description" content="${variables.description}">
  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="${variables.url}">
  <meta property="og:title" content="${variables.title}">
  <meta property="og:description" content="${variables.description}">
  <meta property="og:image" content="${variables.image}">

  <meta name="picnode:sitetitle" content="${variables.title}">
  <meta name="picnode:sitedescription" content="${variables.description}">
  <meta name="picnode:sitelogo" content="${variables.image}">
  <meta name="picnode:thumbnail" content="${variables.image}">

  <meta name="picnode:siteurl" content="${variables.url}">
  <meta name="picnode:buttontext" content="${variables.buttontext}">
  <meta name="picnode:buttonurl" content="${variables.buttonURL}">

  <!-- Optional Meta Tags -->
  <meta name="keywords" content="${variables.keywords}">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">`

const code = `
				<div class='message is-primary'>
					<div class='message-header'>
						<p class='is-size-4'>Meta elemek</p>
					</div>
					<div class='message-body is-primary'>
						<textarea
							class='textarea' id="meta"}
							onclick="copyToClipBoard()">
							${meta}
						</textarea>
					</div>
					<button class='button is-success has-text-weight-bold copy' id="bb" style="display:none">Sikeresen Másolva</button>
                    <button class='button is-warning has-text-weight-bold copy' id="aa" onclick="copyToClipBoard()">Másolás Vágólapra</button>
				</div>

`


root.innerHTML = form;

function handleChange(e) {
    const titleRemaining = document.getElementById("titleRemaining");
    const descRemaining = document.getElementById("descRemaining");
    const {
        name,
        value
    } = e.currentTarget;
    variables[name] = value;
    titleRemaining.innerHTML = 70 - variables.title.length + " betű hátra";
    descRemaining.innerHTML = 150 - variables.description.length + " betű hátra";
};

function handleClick(e) {
    e.preventDefault();

    root.innerHTML = code;

}
function copyToClipBoard(e){
    document.getElementById("bb").style.display="block"
    document.getElementById("aa").style.display="none"

    document.getElementById("meta").select();
    document.execCommand('copy');
}