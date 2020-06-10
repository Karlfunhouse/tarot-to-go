import React from 'react';
import ReactDOM from 'react-dom';
import { render, waitFor, fireEvent } from '@testing-library/react';
import App, { drawACard, drawThreeCards, setIntention } from './App';
import { MemoryRouter } from 'react-router-dom';
import { fetchSingleCard, fetchThreeCards } from '../../apiFetch'
jest.mock('../../apiFetch')

describe('<App />', () => {

  it('User should be able to input an intention and draw a card', async () => {
    const card = {cards: [{
      name: "Nine of Cups",
      name_short: "cu09",
      value: "nine",
      value_int: 9,
      suit: "cups",
      type: "minor",
      meaning_up: "Concord, contentment, physical bien-être; also victory, success, advantage; satisfaction for the Querent or person for whom the consultation is made.",
      meaning_rev: "Truth, loyalty, liberty; but the readings vary and include mistakes, imperfections, etc.",
      desc: "A goodly personage has feasted to his heart's content, and abundant refreshment of wine is on the arched counter behind him, seeming to indicate that the future is also assured. The picture offers the material side only, but there are other aspects.",
    }]};
    const threeCards = [{
        "name": "Nine of Cups",
        "name_short": "cu09",
        "value": "nine",
        "value_int": 9,
        "suit": "cups",
        "type": "minor",
        "meaning_up": "Concord, contentment, physical bien-être; also victory, success, advantage; satisfaction for the Querent or person for whom the consultation is made.",
        "meaning_rev": "Truth, loyalty, liberty; but the readings vary and include mistakes, imperfections, etc.",
        "desc": "A goodly personage has feasted to his heart's content, and abundant refreshment of wine is on the arched counter behind him, seeming to indicate that the future is also assured. The picture offers the material side only, but there are other aspects."
      },
      {
        "name": "Ten of Swords",
        "name_short": "sw10",
        "value": "ten",
        "value_int": 10,
        "suit": "swords",
        "type": "minor",
        "meaning_up": "Whatsoever is intimated by the design; also pain, affliction, tears, sadness, desolation. It is not especially a card of violent death.",
        "meaning_rev": "Advantage, profit, success, favour, but none of these are permanent; also power and authority.",
        "desc": "A prostrate figure, pierced by all the swords belonging to the card."
      },
      {
        "type": "major",
        "name_short": "ar01",
        "name": "The Magician",
        "value": "1",
        "value_int": 1,
        "meaning_up": "Skill, diplomacy, address, subtlety; sickness, pain, loss, disaster, snares of enemies; self-confidence, will; the Querent, if male.",
        "meaning_rev": "Physician, Magus, mental disease, disgrace, disquiet.",
        "desc": "A youthful figure in the robe of a magician, having the countenance of divine Apollo, with smile of confidence and shining eyes. Above his head is the mysterious sign of the Holy Spirit, the sign of life, like an endless cord, forming the figure 8 in a horizontal position . About his waist is a serpent-cincture, the serpent appearing to devour its own tail. This is familiar to most as a conventional symbol of eternity, but here it indicates more especially the eternity of attainment in the spirit. In the Magician's right hand is a wand raised towards heaven, while the left hand is pointing to the earth. This dual sign is known in very high grades of the Instituted Mysteries; it shews the descent of grace, virtue and light, drawn from things above and derived to things below. The suggestion throughout is therefore the possession and communication of the Powers and Gifts of the Spirit. On the table in front of the Magician are the symbols of the four Tarot suits, signifying the elements of natural life, which lie like counters before the adept, and he adapts them as he wills. Beneath are roses and lilies, the flos campi and lilium convallium, changed into garden flowers, to shew the culture of aspiration. This card signifies the divine motive in man, reflecting God, the will in the liberation of its union with that which is above. It is also the unity of individual being on all planes, and in a very high sense it is thought, in the fixation thereof. With further reference to what I have called the sign of life and its connexion with the number 8, it may be remembered that Christian Gnosticism speaks of rebirth in Christ as a change \"unto the Ogdoad.\" The mystic number is termed Jerusalem above, the Land flowing with Milk and Honey, the Holy Spirit and the Land of the Lord. According to Martinism, 8 is the number of Christ."
      }
    ]

    fetchSingleCard.mockResolvedValueOnce(card)
    
    const { getByPlaceholderText, getByText } = render(
          <MemoryRouter>
              <App />
          </MemoryRouter>);
          
    const intention = getByPlaceholderText('Magic Awaits...')
    const drawCardButton = getByText('DRAW A SINGLE CARD')
      

    await waitFor(() => {
      fireEvent.change(intention, {target: {value: 'Why is the world on fire?'}})
      expect(getByText('Why is the world on fire?')).toBeInTheDocument()
    })

    await waitFor(() => {fireEvent.click(drawCardButton)})
    // expect(setIntention).toHaveBeenCalled()
    // expect(drawACard).toHaveBeenCalled()
    expect(getByText('Nine of Cups')).toBeInTheDocument()

  })
})
