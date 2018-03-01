var express = require('express')
var router = express.Router();

var class_controller = require('../controllers/classController');
var subject_controller = require('../controllers/subjectController');
var chapter_controller = require('../controllers/chapterController');
var question_controller = require('../controllers/questionController');
var strimage_controller = require('../controllers/strimageController');
var macroskill_controller = require('../controllers/macroskillController');
var nanoskill_controller = require('../controllers/nanoskillController');
var image_controller = require('../controllers/imageController');

//router.get('/',nanoskill_controller.index);

/* GET request for creating a class. NOTE This must come before routes that display class (uses id) */
router.get('/class/create', class_controller.class_create_get);

/* POST request for creating class. */
router.post('/class/create', class_controller.class_create_post);

/* GET request to delete class. */
router.get('/class/:id/delete', class_controller.class_delete_get);

// POST request to delete class
router.post('/class/:id/delete', class_controller.class_delete_post);

/* GET request to update class. */
router.get('/class/:id/update', class_controller.class_update_get);

// POST request to update class
router.post('/class/:id/update', class_controller.class_update_post);

/* GET request for one class. */
router.get('/:id', class_controller.class_detail);

/* GET request for list of all class items. */
router.get('/class/list', class_controller.class_list);



/* GET request for creating a subject. NOTE This must come before routes that display subject (uses id) */
router.get('/subject/:class_id/create', subject_controller.subject_create_get);

/* POST request for creating subject. */
router.post('/subject/:class_id/create', subject_controller.subject_create_post);

/* GET request to delete subject. */
router.get('/subject/:id/delete', subject_controller.subject_delete_get);

// POST request to delete subject
router.post('/subject/:id/delete', subject_controller.subject_delete_post);

/* GET request to update subject. */
router.get('/subject/:id/update', subject_controller.subject_update_get);

// POST request to update subject
router.post('/subject/:id/update', subject_controller.subject_update_post);

/* GET request for one subject. */
router.get('/:id', subject_controller.subject_detail);

/* GET request for list of all subject items. */
router.get('/subject/list', subject_controller.subject_list);



/* GET request for creating a chapter. NOTE This must come before routes that display chapter (uses id) */
router.get('/chapter/:class_id/:subject_id/create', chapter_controller.chapter_create_get);

/* POST request for creating chapter. */
router.post('/chapter/:class_id/:subject_id/create', chapter_controller.chapter_create_post);

/* GET request to delete chapter. */
router.get('/chapter/:id/delete', chapter_controller.chapter_delete_get);

// POST request to delete chapter
router.post('/chapter/:id/delete', chapter_controller.chapter_delete_post);

/* GET request to update chapter. */
router.get('/chapter/:id/update', chapter_controller.chapter_update_get);

// POST request to update chapter
router.post('/chapter/:id/update', chapter_controller.chapter_update_post);

/* GET request for one chapter. */
router.get('/:id', chapter_controller.chapter_detail);

/* GET request for list of all chapter items. */
router.get('/chapter/list', chapter_controller.chapter_list);




/* GET request for creating a question. NOTE This must come before routes that display nanoskill (uses id) */
router.get('/question/:class_id/:subject_id/:chapter_id/create', question_controller.question_create_get);

/* POST request for creating question. */
router.post('/question/:class_id/:subject_id/:chapter_id/create', question_controller.question_create_post);

/* GET request to delete question. */
router.get('/question/:id/delete', question_controller.question_delete_get);

// POST request to delete question
router.post('/question/:id/delete', question_controller.question_delete_post);

/* GET request to update question. */
router.get('/question/:id/update', question_controller.question_update_get);

// POST request to update question
router.post('/question/:id/update', question_controller.question_update_post);

/* GET request for one question. */
router.get('/:id', question_controller.question_detail);

/* GET request for list of all question items. */
router.get('/', question_controller.question_list);

/*POST request to upload images . */
// router.post('/question/upload',uploadImages.upload_multiple_images); 


//Image controller route functions

router.get('/upload',image_controller.image_upload_get);

router.post('/upload',image_controller.image_upload_post);

router.get('all_images',image_controller.all_images);

//OBJECTIVE QUESTION

// /* GET request for creating a objective_question. NOTE This must come before routes that display objective_question (uses id) */
// router.get('/objective_question/:question_id/create', objective_question_controller.question_create_get);

// /* POST request for creating objective_question. */
// router.post('/objective_question/:question_id/create', objective_question_controller.question_create_post);

// /* GET request to delete objective_question. */
// router.get('/objective_question/:id/delete', objective_question_controller.objective_question_delete_get);

// /* POST request to delete objective_question */
// router.post('/objective_question/:id/delete', objective_question_controller.objective_question_delete_post);

// /* GET request to update objective_question. */
// router.get('/objective_question/:id/update', objective_question_controller.objective_question_update_get);

// /* POST request to update objective_question */
// router.post('/objective_question/:id/update', objective_question_controller.question_update_post);

// /* GET request for one objective_question. */
// router.get('/:id', objective_question_controller.objective_question_detail);

// /* GET request for list of all objective_question items. */
// router.get('/', objective_question_controller.objective_question_list);




/* GET request for creating a macroskill. NOTE This must come before routes that display macroskill (uses id) */
router.get('/macroskill/create', macroskill_controller.macroskill_create_get);

/* POST request for creating nanoskill. */
router.post('/macroskill/create', macroskill_controller.macroskill_create_post);

/* GET request to delete nanoskill. */
router.get('/macroskill/:id/delete', macroskill_controller.macroskill_delete_get);

// POST request to delete nanoskill
router.post('/macroskill/:id/delete', macroskill_controller.macroskill_delete_post);

/* GET request to update nanoskill. */
router.get('/macroskill/:id/update', macroskill_controller.macroskill_update_get);

// POST request to update nanoskill
router.post('/macroskill/:id/update', macroskill_controller.macroskill_update_post);

/* GET request for one nanoskill. */
router.get('/:id', macroskill_controller.macroskill_detail);

/* GET request for list of all macroskill items. */
router.get('/macroskill/list', macroskill_controller.macroskill_list);





/* GET request for creating a nanoskill. NOTE This must come before routes that display nanoskill (uses id) */
router.get('/nanoskill/:macro_id/create', nanoskill_controller.nanoskill_create_get);

/* POST request for creating nanoskill. */
router.post('/nanoskill/:macro_id/create', nanoskill_controller.nanoskill_create_post);

/* GET request to delete nanoskill. */
router.get('/nanoskill/:id/delete', nanoskill_controller.nanoskill_delete_get);

// POST request to delete nanoskill
router.post('/nanoskill/:id/delete', nanoskill_controller.nanoskill_delete_post);

/* GET request to update nanoskill. */
router.get('/nanoskill/:id/update', nanoskill_controller.nanoskill_update_get);

// POST request to update nanoskill
router.post('/nanoskill/:id/update', nanoskill_controller.nanoskill_update_post);

/* GET request for one nanoskill. */
router.get('/:id', nanoskill_controller.nanoskill_detail);

/* GET request for list of all nanoskill items. */
router.get('/nanoskill/list', nanoskill_controller.nanoskill_list);




// /* GET request for creating a strimage. NOTE This must come before routes that display strimage (uses id) */
// router.get('/strimage/:question_id/create', strimage_controller.strimage_create_get);

// /* POST request for creating strimage. */
// router.post('/strimage/:question_id/create', strimage_controller.strimage_create_post);

// /* GET request to delete strimage. */
// router.get('/strimage/:id/delete', strimage_controller.strimage_delete_get);

// // POST request to delete strimage
// router.post('/strimage/:id/delete', strimage_controller.strimage_delete_post);

// /* GET request to update strimage. */
// router.get('/strimage/:id/update', strimage_controller.strimage_update_get);

// // POST request to update strimage
// router.post('/strimage/:id/update', strimage_controller.strimage_update_post);

// /* GET request for one strimage. */
// router.get('/:id', strimage_controller.strimage_detail);

// /* GET request for list of all strimage items. */
// router.get('/strimage/list', strimage_controller.strimage_list);


module.exports = router;