# yii2-animate
This extension integrates daneden's animate.css into yii2 framework.

## Resources
 * [daneden/animate.css](https://github.com/daneden/animate.css)
 * [yii2](https://github.com/yiisoft/yii2) framework

## Installation 

The preferred way to install this extension is through [composer](http://getcomposer.org/download/).

Either run

```
$ php composer.phar require --prefer-dist simialbi/yii2-animate
```

or add 

```
"simialbi/yii2-animate": "*"
```

to the ```require``` section of your `composer.json`

## Usage

### Register asset bundle

Either register in view (for example: `@app/views/layouts/main.php`)

```php
<?php
/* @var $this \yii\web\View */
use simialbi\yii2\animatecss\AnimateCssPluginAsset;

AnimateCssPluginAsset::register($this);
```

or add the following to your `assets/AppAsset.php`

```php
<?php
class AppAsset extends \yii\web\AssetBundle {
	public $depends = [
		'simialbi\yii2\animatecss\AnimateCssPluginAsset',
	];
}
```


## Example Usage

### Via data attributes

In your view use it like this:
```php
<?php
/* @var $this \yii\web\View */

$this->title = 'My Yii Application';
?>
<div class="site-index">
    <div class="jumbotron" data-animation="tada">
		<h1>Congratulations!</h1>
 
		<p class="lead">You have successfully created your Yii-powered application.</p>
		
		<p>
			<a class="btn btn-lg btn-success" href="http://www.yiiframework.com">Get started with Yii</a>
		</p>
	</div>
</div>
```

### Via java script
In your view use it like this:
```php
<?php
/* @var $this \yii\web\View */

$this->title = 'My Yii Application';
?>
<div class="site-index">
    <div class="jumbotron">
		<h1>Congratulations!</h1>
 
		<p class="lead">You have successfully created your Yii-powered application.</p>
		
		<p>
			<a class="btn btn-lg btn-success" href="http://www.yiiframework.com">Get started with Yii</a>
		</p>
	</div>
</div>
<?php
	$this->registerJs("jQuery('.jumbotron').animateCss('tada')");
?>
```

For more information see [official animate.css documentation](https://github.com/daneden/animate.css#usage).


## License

**yii2-animate** is released under MIT license. See bundled [LICENSE](LICENSE) for details.
