import React, { useEffect } from "react"
import DFKBase, {
  AppendageColor,
  BackAppendages,
  EyeColors,
  HairColors,
  HairStylesFemale,
  HairStylesGeneric,
  HairStylesMale,
  HeadAppendages,
  ActiveSkills,
  PassiveSkills,
  SkinColors,
  Targets,
  ValidCraftingGenes,
  Crafting,
  Element
} from "../Logic/Dropdowns"
import Image from "next/image"
import Jewel from "../public/Jewel.png"
import Jade from "../public/Jade.png"
import SelectItem from "./Filters/SelectItem"
import RaritySlider from "./Filters/RaritySlider"
import NumberSlider from "./Filters/NumberSlider"
import {
  Button,
  Container,
  Grid,
  Input,
  InputAdornment,
  InputLabel
} from "@mui/material"
import SelectItemSingle from "./Filters/SelectItemSingle"
import {
  crafting,
  femaleFirstNames,
  lastNames,
  maleFirstNames
} from "../Logic/HeroBase"
import IdInput from "./Filters/IdInput"
import NumberInput from "./Filters/NumberInput"

function HeroFilters({ includeSalePrice, visible, useStore, initiate }) {
  const mainClass = useStore((state) => state.mainClass)
  const setMainClass = useStore((state) => state.setMainClass)
  const subClass = useStore((state) => state.subClass)
  const setSubClass = useStore((state) => state.setSubClass)
  const background = useStore((state) => state.background)
  const setBackground = useStore((state) => state.setBackground)
  const professions = useStore((state) => state.professions)
  const setProfessions = useStore((state) => state.setProfessions)
  const SB1 = useStore((state) => state.SB1)
  const setSB1 = useStore((state) => state.setSB1)
  const SB2 = useStore((state) => state.SB2)
  const setSB2 = useStore((state) => state.setSB2)
  const target = useStore((state) => state.target)
  const setTarget = useStore((state) => state.setTarget)
  const PJ = useStore((state) => state.PJ)
  const setPJ = useStore((state) => state.setPJ)
  const rarity = useStore((state) => state.rarity)
  const setRarity = useStore((state) => state.setRarity)
  const generation = useStore((state) => state.generation)
  const setGeneration = useStore((state) => state.setGeneration)
  const summons = useStore((state) => state.summons)
  const setSummons = useStore((state) => state.setSummons)
  const level = useStore((state) => state.level)
  const setLevel = useStore((state) => state.setLevel)
  const minSalePrice = useStore((state) => state.minSalePrice)
  const setMinSalePrice = useStore((state) => state.setMinSalePrice)
  const maxSalePrice = useStore((state) => state.maxSalePrice)
  const setMaxSalePrice = useStore((state) => state.setMaxSalePrice)
  const mFName = useStore((state) => state.mFName)
  const setMFName = useStore((state) => state.setMFName)
  const fFName = useStore((state) => state.fFName)
  const setFFName = useStore((state) => state.setFFName)
  const lName = useStore((state) => state.lName)
  const setLName = useStore((state) => state.setLName)
  const idInput = useStore((state) => state.idInput)
  const setIdInput = useStore((state) => state.setIdInput)
  const active1 = useStore((state) => state.active1)
  const setActive1 = useStore((state) => state.setActive1)
  const active2 = useStore((state) => state.active2)
  const setActive2 = useStore((state) => state.setActive2)
  const passive1 = useStore((state) => state.passive1)
  const setPassive1 = useStore((state) => state.setPassive1)
  const passive2 = useStore((state) => state.passive2)
  const setPassive2 = useStore((state) => state.setPassive2)
  const section = useStore((state) => state.section)
  const setSection = useStore((state) => state.setSection)
  const clearFilters = useStore((state) => state.clearFilters)
  const setFilter = useStore((state) => state.setFilter)
  const heroes = useStore((state) => state.heroes)
  const setRealm = useStore((state) => state.setRealm)
  const realm = useStore((state) => state.realm)
  const setGender = useStore((state) => state.setGender)
  const gender = useStore((state) => state.gender)
  const setMinStrength = useStore((state) => state.setMinStrength)
  const minStrength = useStore((state) => state.minStrength)
  const setMinDexterity = useStore((state) => state.setMinDexterity)
  const minDexterity = useStore((state) => state.minDexterity)
  const setMinAgility = useStore((state) => state.setMinAgility)
  const minAgility = useStore((state) => state.minAgility)
  const setMinVitality = useStore((state) => state.setMinVitality)
  const minVitality = useStore((state) => state.minVitality)
  const setMinEndurance = useStore((state) => state.setMinEndurance)
  const minEndurance = useStore((state) => state.minEndurance)
  const setMinIntelligence = useStore((state) => state.setMinIntelligence)
  const minIntelligence = useStore((state) => state.minIntelligence)
  const setMinWisdom = useStore((state) => state.setMinWisdom)
  const minWisdom = useStore((state) => state.minWisdom)
  const setMinLuck = useStore((state) => state.setMinLuck)
  const minLuck = useStore((state) => state.minLuck)
  const setMinMana = useStore((state) => state.setMinMana)
  const minMana = useStore((state) => state.minMana)
  const setMinHealth = useStore((state) => state.setMinHealth)
  const minHealth = useStore((state) => state.minHealth)
  const setMinMining = useStore((state) => state.setMinMining)
  const minMining = useStore((state) => state.minMining)
  const setMinGardening = useStore((state) => state.setMinGardening)
  const minGardening = useStore((state) => state.minGardening)
  const setMinForaging = useStore((state) => state.setMinForaging)
  const minForaging = useStore((state) => state.minForaging)
  const setMinFishing = useStore((state) => state.setMinFishing)
  const minFishing = useStore((state) => state.minFishing)
  const setHairStyle = useStore((state) => state.setHairStyle)
  const hairStyle = useStore((state) => state.hairStyle)
  const setHairColor = useStore((state) => state.setHairColor)
  const hairColor = useStore((state) => state.hairColor)
  const setHeadAppendage = useStore((state) => state.setHeadAppendage)
  const headAppendage = useStore((state) => state.headAppendage)
  const setAppendageColor = useStore((state) => state.setAppendageColor)
  const appendageColor = useStore((state) => state.appendageColor)
  const setBackAppendage = useStore((state) => state.setBackAppendage)
  const backAppendage = useStore((state) => state.backAppendage)
  const setBackAppendageColor = useStore((state) => state.setBackAppendageColor)
  const backAppendageColor = useStore((state) => state.backAppendageColor)
  const eyeColor = useStore((state) => state.eyeColor)
  const setEyeColor = useStore((state) => state.setEyeColor)
  const skinColor = useStore((state) => state.skinColor)
  const setSkinColor = useStore((state) => state.setSkinColor)
  const darkSum = useStore((state) => state.darkSum)
  const setDarkSum = useStore((state) => state.setDarkSum)
  const darkSumLevels = useStore((state) => state.darkSumLevels)
  const setDarkSumLevels = useStore((state) => state.setDarkSumLevels)
  const hasValidCraftingGenes = useStore((state) => state.hasValidCraftingGenes)
  const setHasValidCraftingGenes = useStore(
    (state) => state.setHasValidCraftingGenes
  )
  const crafting1 = useStore((state) => state.crafting1)
  const setCrafting1 = useStore((state) => state.setCrafting1)
  const crafting2 = useStore((state) => state.crafting2)
  const setCrafting2 = useStore((state) => state.setCrafting2)
  const element = useStore((state) => state.element)
  const setElement = useStore((state) => state.setElement)
  useEffect(() => {
    if (heroes.length == 0 && initiate) {
      UpdateQuery()
    }
  }, [])
  const UpdateQuery = () => {
    let query = ``
    if (minMining > 0) {
      query += `mining_gte:${minMining},`
    }
    if (minGardening > 0) {
      query += `gardening_gte:${minGardening},`
    }
    if (minForaging > 0) {
      query += `foraging_gte:${minForaging},`
    }
    if (minFishing > 0) {
      query += `fishing_gte:${minFishing},`
    }
    if (minHealth > 0) {
      query += `hp_gte:${minHealth},`
    }
    if (minMana > 0) {
      query += `mp_gte:${minMana},`
    }
    if (minStrength > 0) {
      query += `strength_gte:${minStrength},`
    }
    if (minDexterity > 0) {
      query += `dexterity_gte:${minDexterity},`
    }
    if (minAgility > 0) {
      query += `agility_gte:${minAgility},`
    }
    if (minVitality > 0) {
      query += `vitality_gte:${minVitality},`
    }
    if (minEndurance > 0) {
      query += `endurance_gte:${minEndurance},`
    }
    if (minIntelligence > 0) {
      query += `intelligence_gte:${minIntelligence},`
    }
    if (minWisdom > 0) {
      query += `wisdom_gte:${minWisdom},`
    }
    if (minLuck > 0) {
      query += `luck_gte:${minLuck},`
    }
    if (hasValidCraftingGenes[0].value != "false") {
      if (crafting1.length || crafting2.length) {
        query += `hasValidCraftingGenes: true,`
      } else if (hasValidCraftingGenes[0].value.length) {
        query += `hasValidCraftingGenes: ${hasValidCraftingGenes[0].value},`
      }
      if (crafting1.length) {
        query += `statsUnknown1_in: [`
        crafting1.forEach((c, i) => {
          query += `${c.value}`
          if (i < crafting1.length - 1) {
            query += `,`
          }
        })
        query += `],`
      }
      if (crafting2.length) {
        query += `statsUnknown2_in: [`
        crafting2.forEach((c, i) => {
          query += `${c.value}`
          if (i < crafting2.length - 1) {
            query += `,`
          }
        })
        query += `],`
      }
      if (element.length) {
        query += `element_in: [`
        element.forEach((e, i) => {
          query += `${e.value}`
          if (i < element.length - 1) {
            query += `,`
          }
        })
        query += `],`
      }
    } else {
      query += `hasValidCraftingGenes: false,`
    }
    if (skinColor.length > 0) {
      query += `skinColor_in: [`
      skinColor.forEach((c, i) => {
        query += `${c.value}`
        if (i < skinColor.length - 1) {
          query += `,`
        }
      })
      query += `],`
    }
    if (eyeColor.length > 0) {
      query += `eyeColor_in: [`
      eyeColor.forEach((c, i) => {
        query += `${c.value}`
        if (i < eyeColor.length - 1) {
          query += `,`
        }
      })
      query += `],`
    }
    if (backAppendageColor.length > 0) {
      query += `backAppendageColor_in: [`
      backAppendageColor.forEach((c, i) => {
        query += `${c.value}`
        if (i < backAppendageColor.length - 1) {
          query += `,`
        }
      })
      query += `],`
    }
    if (backAppendage.length > 0) {
      query += `backAppendage_in: [`
      backAppendage.forEach((c, i) => {
        query += `${c.value}`
        if (i < backAppendage.length - 1) {
          query += `,`
        }
      })
      query += `],`
    }
    if (headAppendage.length > 0) {
      query += `headAppendage_in: [`
      headAppendage.forEach((c, i) => {
        query += `${c.value}`
        if (i < headAppendage.length - 1) {
          query += `,`
        }
      })
      query += `],`
    }
    if (appendageColor.length > 0) {
      query += `appendageColor_in: [`
      appendageColor.forEach((c, i) => {
        query += `${c.value}`
        if (i < appendageColor.length - 1) {
          query += `,`
        }
      })
      query += `],`
    }
    if (hairColor.length > 0) {
      query += `hairColor_in: [`
      hairColor.forEach((c, i) => {
        query += `${c.value}`
        if (i < hairColor.length - 1) {
          query += `,`
        }
      })
      query += `],`
    }
    if (hairStyle.length > 0) {
      query += `hairStyle_in: [`
      hairStyle.forEach((c, i) => {
        query += `${c.value}`
        if (i < hairStyle.length - 1) {
          query += `,`
        }
      })
      query += `],`
    }
    if (gender.length > 0) {
      query += `gender_in: [`
      gender.forEach((c, i) => {
        query += `${c.value}`
        if (i < gender.length - 1) {
          query += `,`
        }
      })
      query += `],`
    }
    if (mainClass.length > 0) {
      query += `mainClass_in: [`
      mainClass.forEach((c, i) => {
        query += `${c.value}`
        if (i < mainClass.length - 1) {
          query += `,`
        }
      })
      query += `],`
    }
    if (subClass.length > 0) {
      query += `subClass_in: [`
      subClass.forEach((c, i) => {
        query += `${c.value}`
        if (i < subClass.length - 1) {
          query += `,`
        }
      })
      query += `],`
    }
    if (background.length > 0) {
      query += `background_in: [`
      background.forEach((c, i) => {
        query += `${c.value}`
        if (i < background.length - 1) {
          query += `,`
        }
      })
      query += `],`
    }
    if (professions.length > 0) {
      query += `profession_in: [`
      professions.forEach((c, i) => {
        query += `${c.value}`
        if (i < professions.length - 1) {
          query += `,`
        }
      })
      query += `],`
    }
    if (active1.length > 0) {
      query += `active1_in: [`
      active1.forEach((c, i) => {
        query += `${c.value}`
        if (i < active1.length - 1) {
          query += `,`
        }
      })
      query += `],`
    }
    if (active2.length > 0) {
      query += `active2_in: [`
      active2.forEach((c, i) => {
        query += `${c.value}`
        if (i < active2.length - 1) {
          query += `,`
        }
      })
      query += `],`
    }
    if (passive1.length > 0) {
      query += `passive1_in: [`
      passive1.forEach((c, i) => {
        query += `${c.value}`
        if (i < passive1.length - 1) {
          query += `,`
        }
      })
      query += `],`
    }
    if (passive2.length > 0) {
      query += `passive2_in: [`
      passive2.forEach((c, i) => {
        query += `${c.value}`
        if (i < passive2.length - 1) {
          query += `,`
        }
      })
      query += `],`
    }
    if (SB1.length > 0) {
      query += `statBoost1_in: [`
      SB1.forEach((c, i) => {
        query += `${c.value}`
        if (i < SB1.length - 1) {
          query += `,`
        }
      })
      query += `],`
    }

    if (SB2.length > 0) {
      query += `statBoost2_in: [`
      SB2.forEach((c, i) => {
        query += `${c.value}`
        if (i < SB2.length - 1) {
          query += `,`
        }
      })
      query += `],`
    }
    if (PJ.length > 0) {
      if (PJ[0].value === "null") {
        query += `pjStatus: ${PJ[0].value},`
      } else {
        query += `pjStatus: "${PJ[0].value}",`
      }
    }
    if (darkSum.length > 0) {
      query += `darkSummoned: ${darkSum[0].value},`
    }
    if (lName.length > 0) {
      query += `lastName_in: [`
      lName.forEach((c, i) => {
        query += `${c.value}`
        if (i < lName.length - 1) {
          query += `,`
        }
      })
      query += `],`
    }
    if (mFName.length > 0) {
      query += `firstName_in: [`
      mFName.forEach((c, i) => {
        query += `${c.value}`
        if (i < mFName.length - 1) {
          query += `,`
        }
      })
      query += `],gender:1,`
    } else if (fFName.length > 0) {
      query += `firstName_in: [`
      fFName.forEach((c, i) => {
        query += `${c.value}`
        if (i < fFName.length - 1) {
          query += `,`
        }
      })
      query += `],gender:3,`
    }
    if (darkSumLevels[0] !== 0) {
      query += `darkSummonLevels_gte: ${darkSumLevels[0]},`
    }
    if (darkSumLevels[1] !== 99) {
      query += `darkSummonLevels_lte: ${darkSumLevels[1]},`
    }
    if (rarity[0] !== 0) {
      query += `rarity_gte: ${rarity[0]},`
    }
    if (rarity[1] !== 4) {
      query += `rarity_lte: ${rarity[1]},`
    }
    if (generation[0] !== 0) {
      query += `generation_gte: ${generation[0]},`
    }
    if (generation[1] !== 14) {
      query += ` generation_lte:${generation[1]},`
    }
    if (summons[0] !== 0) {
      query += `summonsRemaining_gte: ${summons[0]},`
    }
    if (summons[1] !== 10) {
      query += `summonsRemaining_lte:${summons[1] == 10 ? 11 : summons[1]},`
    }
    if (level[0] !== 1) {
      query += `level_gte: ${level[0]},`
    }
    if (level[1] !== 100) {
      query += `level_lte:${level[1]},`
    }
    if (includeSalePrice) {
      if (minSalePrice !== 0) {
        switch (target[0].value) {
          case "Tavern":
            query += "salePrice_gte: "
            query += `"${minSalePrice}000000000000000000",`
            break
          case "Hire":
            query += "assistingPrice_gte: "
            query += `"${minSalePrice}000000000000000000",`
            break
          case "All":
            break
        }
      }
      if (maxSalePrice !== 9999999) {
        switch (target[0].value) {
          case "Tavern":
            query += "salePrice_lte: "
            break
          case "Hire":
            query += "assistingPrice_lte: "
            break
          case "All":
            break
        }
        query += `"${maxSalePrice}000000000000000000",`
      }
    }
    if (idInput.length > 0) {
      if (idInput.length > 0) {
        console.log(idInput)
        let splitIds = idInput.split(/,| |\n/)
        let addys = splitIds.filter((id) => id.length == 42)
        console.log(addys.length)
        if (addys.length != 0) {
          query += "owner_in: ["
          console.log("addys", addys)
          addys.forEach((id) => {
            query += `"${id}",`
          })
          query += "],"
        }
        let heroId = splitIds.filter(
          (id) =>
            id.length < 42 &&
            id.length > 0 &&
            (!isNaN(parseInt(id)) || !isNaN(id))
        )
        if (heroId.length != 0) {
          console.log("heroId", heroId)
          query += "numberId_in: ["
          heroId.forEach((id, i) => {
            query += `"${id}"`
            if (i < heroId.length - 1) {
              query += ","
            }
          })
          query += "],"
        }
      }
    }
    if (realm.length > 0) {
      query += `network_in: [`
      realm.forEach((c, i) => {
        query += `"${c.value}"`
        if (i < realm.length - 1) {
          query += `,`
        }
      })
      query += `],`
    }
    let order = ``
    if (includeSalePrice) {
      switch (target[0].value) {
        case "Tavern":
          query += `salePrice_not: null`
          order += "orderBy: salePrice"
          break
        case "Hire":
          query += `assistingPrice_not: null`
          order += "orderBy: assistingPrice"
          break
        case "All":
          break
      }
    }

    setFilter(query, order)
  }
  return (
    <>
      {visible && (
        <Container>
          <Grid
            container
            item
            marginY={1}
            justifyContent="center"
            columnSpacing={2}
          >
            <Grid item>
              <Button
                variant="contained"
                color={section == "Main" ? "primary" : "secondary"}
                onClick={() => setSection("Main")}
              >
                Main
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color={section == "Stats" ? "primary" : "secondary"}
                onClick={() => setSection("Stats")}
              >
                Stats
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color={section == "Crafting" ? "primary" : "secondary"}
                onClick={() => setSection("Crafting")}
              >
                Crafting
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color={section == "Cosmetic" ? "primary" : "secondary"}
                onClick={() => setSection("Cosmetic")}
              >
                Cosmetic
              </Button>
            </Grid>
          </Grid>
          {section == "Crafting" && (
            <Grid container>
              <Grid item container xs={12} columnSpacing={2}>
                {crafting1.length || crafting2.length ? (
                  <SelectItemSingle
                    title="Valid Crafting Genes"
                    clearable={false}
                    values={ValidCraftingGenes.filter(
                      (vcg) => vcg.value == "true"
                    )}
                    setValues={() => {}}
                  >
                    {ValidCraftingGenes.filter((vcg) => vcg.value == "true")}
                  </SelectItemSingle>
                ) : (
                  <SelectItemSingle
                    title="Valid Crafting Genes"
                    clearable={false}
                    values={hasValidCraftingGenes}
                    setValues={setHasValidCraftingGenes}
                  >
                    {ValidCraftingGenes}
                  </SelectItemSingle>
                )}

                {hasValidCraftingGenes[0].value != "false" ? (
                  <>
                    <SelectItem
                      title="Crafting 1"
                      values={crafting1}
                      setValues={setCrafting1}
                    >
                      {Crafting}
                    </SelectItem>
                    <SelectItem
                      title="Crafting 2"
                      values={crafting2}
                      setValues={setCrafting2}
                    >
                      {Crafting}
                    </SelectItem>
                    <SelectItemSingle
                      title="Element"
                      clearable={true}
                      values={element}
                      setValues={setElement}
                    >
                      {Element}
                    </SelectItemSingle>
                  </>
                ) : (
                  <></>
                )}
              </Grid>
            </Grid>
          )}
          {section == "Stats" && (
            <Grid container columnSpacing={2}>
              <NumberInput
                name={"health"}
                value={minHealth}
                setValue={setMinHealth}
              />
              <NumberInput
                name={"mana"}
                value={minMana}
                setValue={setMinMana}
              />
              <NumberInput
                name={"strength"}
                value={minStrength}
                setValue={setMinStrength}
              />
              <NumberInput
                name={"dexterity"}
                value={minDexterity}
                setValue={setMinDexterity}
              />
              <NumberInput
                name={"agility"}
                value={minAgility}
                setValue={setMinAgility}
              />
              <NumberInput
                name={"vitality"}
                value={minVitality}
                setValue={setMinVitality}
              />
              <NumberInput
                name={"endurance"}
                value={minEndurance}
                setValue={setMinEndurance}
              />
              <NumberInput
                name={"intelligence"}
                value={minIntelligence}
                setValue={setMinIntelligence}
              />
              <NumberInput
                name={"wisdom"}
                value={minWisdom}
                setValue={setMinWisdom}
              />
              <NumberInput
                name={"luck"}
                value={minLuck}
                setValue={setMinLuck}
              />
              <NumberInput
                name={"mining"}
                value={minMining}
                setValue={setMinMining}
                step={0.1}
              />
              <NumberInput
                name={"gardening"}
                value={minGardening}
                setValue={setMinGardening}
                step={0.1}
              />
              <NumberInput
                name={"foraging"}
                value={minForaging}
                setValue={setMinForaging}
                step={0.1}
              />
              <NumberInput
                name={"fishing"}
                value={minFishing}
                setValue={setMinFishing}
                step={0.1}
              />
            </Grid>
          )}
          {section == "Cosmetic" && (
            <Grid container>
              <Grid item container xs={12} columnSpacing={2}>
                <SelectItem
                  title="Gender"
                  values={gender}
                  setValues={setGender}
                >
                  {[
                    { value: 1, label: `Male` },
                    { value: 3, label: `Female` }
                  ]}
                </SelectItem>
                {gender.length && gender[0].value == 1 ? (
                  <SelectItem
                    title="Male First Names"
                    values={mFName}
                    setValues={setMFName}
                  >
                    {maleFirstNames.map((n, i) => {
                      return { value: i, label: n }
                    })}
                  </SelectItem>
                ) : gender.length && gender[0].value == 2 ? (
                  <SelectItem
                    title="Female First Names"
                    values={fFName}
                    setValues={setFFName}
                  >
                    {femaleFirstNames.map((n, i) => {
                      return { value: i, label: n }
                    })}
                  </SelectItem>
                ) : (
                  <SelectItem
                    title="First Names (Gender=Names)"
                    values={fFName}
                    setValues={setFFName}
                  >
                    {[...Array(2055).keys()].map((n, i) => {
                      return { value: i, label: n }
                    })}
                  </SelectItem>
                )}
                <SelectItem
                  title="Last Name"
                  values={lName}
                  setValues={setLName}
                >
                  {lastNames.map((n, i) => {
                    return { value: i, label: n }
                  })}
                </SelectItem>
              </Grid>

              <Grid item container xs={12} columnSpacing={2}>
                {gender.length && gender[0].value == 1 ? (
                  <SelectItem
                    title="Male Hairstyles"
                    values={hairStyle}
                    setValues={setHairStyle}
                  >
                    {HairStylesMale}
                  </SelectItem>
                ) : gender.length && gender[0].value == 2 ? (
                  <SelectItem
                    title="Female Hairstyles"
                    values={hairStyle}
                    setValues={setHairStyle}
                  >
                    {HairStylesFemale}
                  </SelectItem>
                ) : (
                  <SelectItem
                    title="Hairstyles (Gender=Names)"
                    values={hairStyle}
                    setValues={setHairStyle}
                  >
                    {HairStylesGeneric}
                  </SelectItem>
                )}
                <SelectItem
                  title="Hair Color"
                  values={hairColor}
                  setValues={setHairColor}
                >
                  {HairColors}
                </SelectItem>
                <SelectItem
                  title="Head Appendage"
                  values={headAppendage}
                  setValues={setHeadAppendage}
                >
                  {HeadAppendages}
                </SelectItem>
                <SelectItem
                  title="Head Appendage Color"
                  values={appendageColor}
                  setValues={setAppendageColor}
                >
                  {AppendageColor}
                </SelectItem>
                <SelectItem
                  title="Back Appendage"
                  values={backAppendage}
                  setValues={setBackAppendage}
                >
                  {BackAppendages}
                </SelectItem>
                <SelectItem
                  title="Back Appendage Color"
                  values={backAppendageColor}
                  setValues={setBackAppendageColor}
                >
                  {AppendageColor}
                </SelectItem>
                <SelectItem
                  title="Eye Color"
                  values={eyeColor}
                  setValues={setEyeColor}
                >
                  {EyeColors}
                </SelectItem>
                <SelectItem
                  title="Skin Color"
                  values={skinColor}
                  setValues={setSkinColor}
                >
                  {SkinColors}
                </SelectItem>
              </Grid>
            </Grid>
          )}
          {section == "Main" && (
            <Grid container columnSpacing={3}>
              {includeSalePrice && (
                <SelectItemSingle
                  title="I want to ... heroes"
                  clearable={false}
                  values={target}
                  setValues={setTarget}
                >
                  {Targets}
                </SelectItemSingle>
              )}
              <SelectItem
                title="Network"
                values={realm}
                setValues={setRealm}
              >
                {[
                  { value: "dfk", label: "DFK Chain" },
                  { value: "hmy", label: "Harmony" },
                  { value: "kla", label: "Klaytn" },
                  { value: "met", label: "Metis" },
                ]}
              </SelectItem>
              <SelectItem
                title="Class"
                values={mainClass}
                setValues={setMainClass}
              >
                {DFKBase.Classes}
              </SelectItem>
              <SelectItem
                title="Subclass"
                values={subClass}
                setValues={setSubClass}
              >
                {DFKBase.Classes}
              </SelectItem>
              <SelectItem
                title="Background"
                values={background}
                setValues={setBackground}
              >
                {DFKBase.Backgrounds}
              </SelectItem>
              <SelectItem
                title="Profession"
                values={professions}
                setValues={setProfessions}
              >
                {DFKBase.Professions}
              </SelectItem>
              <SelectItem
                title="Active 1"
                values={active1}
                setValues={setActive1}
              >
                {ActiveSkills}
              </SelectItem>
              <SelectItem
                title="Active 2"
                values={active2}
                setValues={setActive2}
              >
                {ActiveSkills}
              </SelectItem>
              <SelectItem
                title="Passive 1"
                values={passive1}
                setValues={setPassive1}
              >
                {PassiveSkills}
              </SelectItem>
              <SelectItem
                title="Passive 2"
                values={passive2}
                setValues={setPassive2}
              >
                {PassiveSkills}
              </SelectItem>
              <SelectItem
                title="+2 Stats"
                color="#11BB11"
                values={SB1}
                setValues={setSB1}
              >
                {DFKBase.StatBoosts}
              </SelectItem>
              <SelectItem
                title="2%/4% Growth"
                color="#0055FF"
                values={SB2}
                setValues={setSB2}
              >
                {DFKBase.StatBoosts}
              </SelectItem>
              <SelectItemSingle
                title="PJ Status"
                values={PJ}
                setValues={setPJ}
                clearable={true}
              >
                {DFKBase.PJSurvivor}
              </SelectItemSingle>
              <SelectItemSingle
                title="Dark Summoned"
                values={darkSum}
                setValues={setDarkSum}
                clearable={true}
              >
                {DFKBase.DarkSummoned}
              </SelectItemSingle>
              <NumberSlider
                title={"Dark Summon Levelups"}
                value={darkSumLevels}
                setValue={setDarkSumLevels}
                marks={[
                  { value: 0, label: 0 },
                  { value: 25, label: 25 },
                  { value: 50, label: 50 },
                  { value: 75, label: 75 },
                  { value: 99, label: 99 }
                ]}
                min={0}
                max={99}
              />
              <RaritySlider rarity={rarity} setRarity={setRarity} />
              <NumberSlider
                title={"Generation"}
                value={generation}
                setValue={setGeneration}
                min={0}
                max={14}
                marks={[
                  {
                    value: 0,
                    label: <div style={{ fontSize: "11px" }}>0</div>
                  },
                  {
                    value: 1,
                    label: <div style={{ fontSize: "11px" }}>1</div>
                  },
                  {
                    value: 2,
                    label: <div style={{ fontSize: "11px" }}>2</div>
                  },
                  {
                    value: 3,
                    label: <div style={{ fontSize: "11px" }}>3</div>
                  },
                  {
                    value: 4,
                    label: <div style={{ fontSize: "11px" }}>4</div>
                  },
                  {
                    value: 5,
                    label: <div style={{ fontSize: "11px" }}>5</div>
                  },
                  {
                    value: 6,
                    label: <div style={{ fontSize: "11px" }}>6</div>
                  },
                  {
                    value: 7,
                    label: <div style={{ fontSize: "11px" }}>7</div>
                  },
                  {
                    value: 8,
                    label: <div style={{ fontSize: "11px" }}>8</div>
                  },
                  {
                    value: 9,
                    label: <div style={{ fontSize: "11px" }}>9</div>
                  },
                  {
                    value: 10,
                    label: <div style={{ fontSize: "11px" }}>10</div>
                  },
                  {
                    value: 11,
                    label: <div style={{ fontSize: "11px" }}>11</div>
                  },
                  {
                    value: 12,
                    label: <div style={{ fontSize: "11px" }}>12</div>
                  },
                  {
                    value: 13,
                    label: <div style={{ fontSize: "11px" }}>13</div>
                  },
                  {
                    value: 14,
                    label: <div style={{ fontSize: "11px" }}>14</div>
                  }
                ]}
              />
              <NumberSlider
                title={"Summons"}
                min={0}
                max={10}
                value={summons}
                setValue={setSummons}
                marks={[
                  {
                    value: 0,
                    label: <div style={{ fontSize: "11px" }}>0</div>
                  },
                  {
                    value: 1,
                    label: <div style={{ fontSize: "11px" }}>1</div>
                  },
                  {
                    value: 2,
                    label: <div style={{ fontSize: "11px" }}>2</div>
                  },
                  {
                    value: 3,
                    label: <div style={{ fontSize: "11px" }}>3</div>
                  },
                  {
                    value: 4,
                    label: <div style={{ fontSize: "11px" }}>4</div>
                  },
                  {
                    value: 5,
                    label: <div style={{ fontSize: "11px" }}>5</div>
                  },
                  {
                    value: 6,
                    label: <div style={{ fontSize: "11px" }}>6</div>
                  },
                  {
                    value: 7,
                    label: <div style={{ fontSize: "11px" }}>7</div>
                  },
                  {
                    value: 8,
                    label: <div style={{ fontSize: "11px" }}>8</div>
                  },
                  {
                    value: 9,
                    label: <div style={{ fontSize: "11px" }}>9</div>
                  },
                  {
                    value: 10,
                    label: <div style={{ fontSize: "11px" }}>10</div>
                  }
                ]}
              />
              <NumberSlider
                title={"Level"}
                value={level}
                setValue={setLevel}
                marks={[
                  { value: 1, label: 1 },
                  { value: 25, label: 25 },
                  { value: 50, label: 50 },
                  { value: 75, label: 75 },
                  { value: 100, label: 100 }
                ]}
                min={1}
                max={100}
              />
              {includeSalePrice && (
                <>
                  <Grid item xs={12} sm={6} md={4} xl={3}>
                    <InputLabel htmlFor="minPrice" className="text-white">
                      Min Price
                    </InputLabel>
                    <Input
                      placeholder="0"
                      value={minSalePrice}
                      id="minPrice"
                      onChange={(e) => setMinSalePrice(e.target.value)}
                      sx={{ width: "100%" }}
                      type="number"
                      startAdornment={
                        <InputAdornment position="start" sx={{ width: "30px" }}>
                          <Image
                            src={Jade}
                            alt="Jade"
                            width={24}
                            height={24}
                          ></Image>
                        </InputAdornment>
                      }
                    ></Input>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} xl={3}>
                    <InputLabel htmlFor="minPrice" className="text-white">
                      Max Price
                    </InputLabel>
                    <Input
                      placeholder="9999999"
                      value={maxSalePrice}
                      id="maxPrice"
                      onChange={(e) => setMaxSalePrice(e.target.value)}
                      sx={{ width: "100%" }}
                      type="number"
                      startAdornment={
                        <InputAdornment position="start" sx={{ width: "30px" }}>
                          <Image
                            src={Jade}
                            alt="Jade"
                            width={24}
                            height={24}
                          ></Image>
                        </InputAdornment>
                      }
                    ></Input>
                  </Grid>
                </>
              )}
              <IdInput
                value={idInput}
                label={
                  "Id and 0x Address Input, you can't search for Ids and Wallets at the same time."
                }
                setValue={(val) => {
                  setIdInput(val)
                  setTarget([Targets[0]])
                }}
              />
            </Grid>
          )}
          <Grid
            container
            item
            columnSpacing={2}
            marginY={1}
            justifyContent={"center"}
          >
            <Grid item>
              <Button
                variant="contained"
                color="success"
                onClick={() => {
                  let splitIds = idInput.split(/,| |\n/)
                  let addys = splitIds.filter((id) => {
                    return id.length === 42
                  })
                  let ids = splitIds.filter((id) => {
                    return id.trim() && id.length !== 42 && !isNaN(id)
                  })

                  console.log(ids)
                  ids = ids.map((v, i) => {
                    if (Number(v) < 2000000000000) {
                      console.log(v + 1000000000000, v)
                      return Number(v) + 1000000000000
                    }
                    console.log(v)
                    return Number(v) - 2000000000000
                  })
                  setIdInput(
                    `${addys.toString()}${
                      addys.length && ids.length ? `,` : ``
                    }${ids.toString()}`
                  )
                }}
              >
                Convert IDS
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="success"
                onClick={() => UpdateQuery()}
              >
                Search
              </Button>
            </Grid>
            <Grid item>
              <Button
                sx={{ marginLeft: ".5rem" }}
                variant="contained"
                color="secondary"
                onClick={clearFilters}
              >
                Clear Filters
              </Button>
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  )
}
export default HeroFilters
