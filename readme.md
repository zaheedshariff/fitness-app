      </div>
      <div class="vertical-bar">
        <div class="search-icon"></div>
        <i class="fas fa-dumbbell"></i>
        <i class="fas fa-dumbbell" aria-hidden="true"></i>
        <i class="fas fa-search"></i>
        <div class="social-icon"></div>
        <i class="fab fa-facebook"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-twitter"></i>
      </div>



//On the show view, display a Delete Skill link that when clicked, deletes the skill from the "database" and redirects to the index view.
router.delete('/:id', skillsCtrl.deleteOne)

function deleteOne(id) {
  // Find the index based on the id of the todo object
  const idx = skills.findIndex(skills => skills.id === parseInt(id));
  skills.splice(idx, 1);
};


function deleteOne(req, res) {
    skills.deleteOne(req.params.id);
    res.redirect('/skills/all');
};

              <td><form action="/skills/<%= s.id %>?_method=DELETE" class="delete-form" method="POST">
                    <button type="submit">X</button>
                    </form></td>